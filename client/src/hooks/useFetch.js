import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));

    const getData = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      setState({
        data,
        loading: false,
      });
    };
    getData();
  }, []);

  return state;
};

export default useFetch;
