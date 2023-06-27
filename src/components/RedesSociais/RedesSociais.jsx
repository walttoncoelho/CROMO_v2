import React, { useEffect, useState } from 'react'
import { IconSocial } from './Style'
import InstagramIcon from "./img/instagram.svg";
import FacebookIcon from "./img/facebook.svg";
import api from "../../services/api";

export default function RedesSociais() {
  let [instagram, setInstagram] = useState(null);
  let [facebook, setFacebook] = useState(null);

  useEffect(() => {
    async function obterInstagram() {
      let { data } = await api.get("instagram");
      setInstagram(data);
    };
    obterInstagram().catch(error => {
      setInstagram({
        link: "https://www.instagram.com/cromoconstrutora/",
        titulo: "Instagram"
      });
    });
  }, []);

  useEffect(() => {
    async function obterFacebook() {
      let { data } = await api.get("facebook");
      setFacebook(data);
    };
    obterFacebook().catch(error => {
      setFacebook({
        link: "https://www.facebook.com/cromoconstrutora",
        titulo: "Facebook"
      });
    });
  }, []);
  return (
    <IconSocial>
      {instagram && <a href={instagram.link} target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt={instagram.titulo} />
      </a>}
      {facebook && <a href={facebook.link} target="_blank" rel="noopener noreferrer">
        <img src={FacebookIcon} alt={facebook.titulo} />
      </a>}
    </IconSocial>
  )
}
