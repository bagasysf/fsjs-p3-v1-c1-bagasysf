import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error(response.text())
          }
          const dataJson = await response.json()
          setData(dataJson)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }, [url]
  )

  return {
    data, loading
  }
}

