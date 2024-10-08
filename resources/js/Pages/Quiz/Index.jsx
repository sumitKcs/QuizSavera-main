import { Head } from "@inertiajs/react";
import "../../../css/info.css";
import QuizQuestions from "./Partials/QuizQuestions";
import AppLayout from "@/Layouts/AppLayout";
import { useEffect, useState } from "react";

export default function Questions({cat_name, cat_id}) {
    const url = import.meta.env.VITE_SERVER_URL + '/api/' + import.meta.env.VITE_API_VERSION + '/get-web-page-data'

    // const [responseData, setResponseData] = useState(null);
    const [title, setTitle] = useState('');
    const [sidebars, setSidebars] = useState({leftbar: [], rightbar: []});
    const [menu_items, setMenuItems] = useState([]);
    const [notificationItems, setNotificationItems] = useState([]);
    const [isCategory, setIsCategory] = useState(1);
    const [contentType, setContentType] = useState('');
    const [questions, setQuestions] = useState([]);
    const [quiz_title, setQuizTitle] = useState('');
    const [footer, setFooter] = useState([]);


    useEffect(() => {
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
          setMenuItems(result.menuItems);
          setSidebars(result.sidebars);
          setFooter(result.footer);
          setNotificationItems(result.notificationItems);
          setQuizTitle(result.items[0]['mainItemName']);
          setQuestions(result.items[0]['subItems']);
          setContentType(result.contentType);

        };
    
        postData();
      }, []);
    return (
        <>
            <Head title={`${title} Quiz`} />
            <AppLayout menu_items={menu_items} sidebars={sidebars} leftBar={true} rightBar={false} carousel={false} footer={footer} notificationItems={notificationItems}>
                <QuizQuestions questions={questions} title={quiz_title} itemsPerPageVal={3} />
            </AppLayout>
        </>
    );
}
