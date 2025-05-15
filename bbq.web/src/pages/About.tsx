import useTranslation from "../locale/useTranslation";
import {useEffect} from "react";

const About = () => {
  const {t} = useTranslation();
  useEffect(() => {
    document.title = t('companyName') + ' - ' + t('about')
  }, [t]);
  return (
      <div>
        <h2>About Us</h2>
      </div>
  )
}

export default About
