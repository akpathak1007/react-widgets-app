import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslate();
  }, [debounceText]);
  return <div className="display-4 fw-bolder">{translated}</div>;
};

export default Convert;
