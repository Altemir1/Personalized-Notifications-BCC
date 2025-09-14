import { useEffect, useState } from "react"
import { File, Directory, Paths } from 'expo-file-system'
import Papa from "papaparse"

export function useCSV<T>( filename: string ) {
  const [ data, setData ] = useState<T[]>( [] )
  const [ loading, setLoading ] = useState( true )

  useEffect( () => {
    const loadCSV = async () => {
      try {
        const file = new File( Paths.bundle, `assets/${filename}` )
        console.log( file )
        const results = Papa.parse( file, {
          header: true,
        } )
        setData( results.data as T[] )
      } catch ( err ) {
        console.error( "Error reading CSV:", err )
      } finally {
        setLoading( false )
      }
    }

    loadCSV()
  }, [ filename ] )

  return { data, loading }
}

