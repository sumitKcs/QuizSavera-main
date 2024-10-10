import QuizQuestions from "./Partials/QuizQuestions";
import AppLayout from "@/Layouts/AppLayout";
import { useEffect, useState } from "react";
import {useHomeLayoutStore} from "@/store/homeLayout";

export default function Questions({cat_name, cat_id}) {
  const { homeLayout } = useHomeLayoutStore();
  const { menu_items, notifications, sidebars, footer } = homeLayout
    // const [responseData, setResponseData] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [content, setContent] = useState('');
    const [isCategory, setIsCategory] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [quiz_title, setQuizTitle] = useState('');


    useEffect(() => {
        const url = import.meta.env.VITE_SERVER_URL + '/api/' + import.meta.env.VITE_API_VERSION + '/get-web-page-data';
        const postData = async () => {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  
                'packageName' : import.meta.env.VITE_PACKAGE_NAME,
                'catId': cat_id,
                'device': 'web'
            }),
          });
          const result = await response.json();
          console.log(result);
          console.log(result.sidebars);
          setTitle(result.appName);
          setDescription(result.description);
          setKeywords(result.keywords);
          setQuizTitle(result.items[0]['mainItemName']);
          setQuestions(result.items[0]['subItems']);
          setContent(result.content);
        };
    
        postData();
      }, []);
    return (
        <>
             <AppLayout title={title} description={description} keywords={keywords} leftBar={true} rightBar={false} carousel={false}>
                <QuizQuestions questions={questions} title={quiz_title} itemsPerPageVal={3} />
            </AppLayout>
        </>
    );
}
