import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/assets/constants/images'
import MovieCard from '@/components/MovieCard'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { icons } from '@/assets/constants/icons'
import SearchBar from '@/components/SearchBar'

const search = () => {
  const [SearchQuery, setSearchQuery] = useState('')
  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: SearchQuery }), false);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (SearchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }
    , 500); // Debounce time of 500ms
    return () => clearTimeout(timeoutId);
  }, [SearchQuery]);

  return (
    <View className='flex-1 bg-primary flex-col'>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'center', gap: 16, marginVertical: 16 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 item-center'>
              <Image source={icons.logo} className='w-12 h-10' />
            </View>
            <View className='my-5'>
              <SearchBar placeholder='Searching movies ...' value={SearchQuery} onChangeText={(text: string) => setSearchQuery(text)} />
            </View>
            {loading && (
              <ActivityIndicator size='large' color='#0000ff' className='my-3' />
            )}
            {error && (
              <Text className='text-red-500 text-center px-5 my-3'>Error: {error.message}</Text>
            )}
            {
              !loading && !error && SearchQuery.trim() && (movies?.length ?? 0) > 0 && (
                <Text className='text-xl text-white font-bold'>
                  Search Results for {' '}
                  <Text className='text-darkAccent'>{SearchQuery}</Text>
                </Text>
              )
            }
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5'>
              <Text className='text-white text-center'>{SearchQuery.trim()? 'No results found' : 'Search for a movie'}</Text>
            </View>
          ):null
        }
      />
    </View>
  )
}

export default search