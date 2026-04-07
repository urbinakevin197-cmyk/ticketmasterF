import "./styles.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const targetDate = new Date("2026-03-20T13:56:00");

const format = (num) => String(num).padStart(2, "0");

function getTimeLeft() {
  const difference = targetDate - new Date();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function MisBoletos() {
  const [boletos, setBoletos] = useState([]);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const navigate = useNavigate();
  //boleto dinamico
  
  

  const obtenerBoletos = async () => {
  const res = await fetch("https://biographies-citizen-safely-polls.trycloudflare.com/api/mis-boletos", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  const data = await res.json();
  setBoletos(data);
};

useEffect(() => {
  obtenerBoletos();
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
    <title>Ticketmaster - Mis Boletos</title>
      <link
      href="//uk.tmconst.com/rc-51677358/images/favicon.ico"
      rel="icon"
      type="image/x-icon"
    />
     <img
      height="1px"
      src="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/saved_resource"
      style={{
        display: "none",
      }}
      width="1px"
    />
    <img
      height="1px"
      src="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/saved_resource(1)"
      style={{
        display: "none",
      }}
      width="1px"
    />
    <img
      height="1px"
      src="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/saved_resource(2)"
      style={{
        display: "none",
      }}
      width="1px"
    />
    <img
      height="1px"
      src="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/saved_resource(3)"
      style={{
        display: "none",
      }}
      width="1px"
    />
    <link href="https://af.monetate.net/" rel="dns-prefetch" />
    <link href="https://sb.monetate.net/" rel="dns-prefetch" />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/889-7f1e988e4701867b.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/4144-e5367e693e960fdc.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/1463-ed0d15abdb995c7b.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/2958-f19f013b18fb504b.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/4104-a591431c8bff958b.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/9413-47dc29b7eed26786.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/6199-3fecbfb355d441a2.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/4758-32247b199d61e824.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/index-bb80116b472f5c9d.js.descarga"
      rel="prefetch"
    />
    <link
      as="script"
      crossOrigin="anonymous"
      href="./Ticketmaster - Mi Cuenta _ Martes Populares de Lucha Libre CMLL_files/past-events-077b2b13afa2454d.js.descarga"
      rel="prefetch"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '      #onetrust-banner-sdk .onetrust-vendors-list-handler {        cursor: pointer;        color: #1f96db;        font-size: inherit;        font-weight: bold;        text-decoration: none;        margin-left: 5px;        white-space: normal;        word-wrap: break-word;        text-align: left;      }      #onetrust-banner-sdk .onetrust-vendors-list-handler:hover {        color: #1f96db;      }      #onetrust-banner-sdk:focus {        outline: 2px solid #000;        outline-offset: -2px;      }      #onetrust-banner-sdk a:focus {        outline: 2px solid #000;      }      #onetrust-banner-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler,      #onetrust-banner-sdk #onetrust-pc-btn-handler {        outline-offset: 1px;      }      #onetrust-banner-sdk.ot-bnr-w-logo .ot-bnr-logo {        height: 64px;        width: 64px;      }      #onetrust-banner-sdk #onetrust-policy svg,      #onetrust-banner-sdk .banner-option svg {        height: 13px;        width: 13px;        margin-left: 1px;        vertical-align: middle;      }      #onetrust-banner-sdk .ot-tcf2-vendor-count.ot-text-bold {        font-weight: bold;      }      #onetrust-banner-sdk .ot-button-order-0 {        order: 0;      }      #onetrust-banner-sdk .ot-button-order-1 {        order: 1;      }      #onetrust-banner-sdk .ot-button-order-2 {        order: 2;      }      #onetrust-banner-sdk #onetrust-close-btn-container svg {        height: 10px;        width: 10px;        pointer-events: none;      }      #onetrust-banner-sdk .ot-close-icon,      #onetrust-pc-sdk .ot-close-icon,      #ot-sync-ntfy .ot-close-icon {        background-size: contain;        background-repeat: no-repeat;        background-position: center;        height: 12px;        width: 12px;      }      #onetrust-banner-sdk .powered-by-logo,      #onetrust-banner-sdk .ot-pc-footer-logo a,      #onetrust-pc-sdk .powered-by-logo,      #onetrust-pc-sdk .ot-pc-footer-logo a,      #ot-sync-ntfy .powered-by-logo,      #ot-sync-ntfy .ot-pc-footer-logo a {        background-size: contain;        background-repeat: no-repeat;        background-position: center;        height: 25px;        width: 152px;        display: block;        text-decoration: none;        font-size: 0.75em;      }      #onetrust-banner-sdk .powered-by-logo:hover,      #onetrust-banner-sdk .ot-pc-footer-logo a:hover,      #onetrust-pc-sdk .powered-by-logo:hover,      #onetrust-pc-sdk .ot-pc-footer-logo a:hover,      #ot-sync-ntfy .powered-by-logo:hover,      #ot-sync-ntfy .ot-pc-footer-logo a:hover {        color: #565656;      }      #onetrust-banner-sdk h3 *,      #onetrust-banner-sdk h4 *,      #onetrust-banner-sdk h6 *,      #onetrust-banner-sdk button *,      #onetrust-banner-sdk a[data-parent-id] *,      #onetrust-banner-sdk p[role="heading"] *,      #onetrust-pc-sdk h3 *,      #onetrust-pc-sdk h4 *,      #onetrust-pc-sdk h6 *,      #onetrust-pc-sdk button *,      #onetrust-pc-sdk a[data-parent-id] *,      #onetrust-pc-sdk p[role="heading"] *,      #ot-sync-ntfy h3 *,      #ot-sync-ntfy h4 *,      #ot-sync-ntfy h6 *,      #ot-sync-ntfy button *,      #ot-sync-ntfy a[data-parent-id] *,      #ot-sync-ntfy p[role="heading"] * {        font-size: inherit;        font-weight: inherit;        color: inherit;      }      #onetrust-banner-sdk .ot-hide,      #onetrust-pc-sdk .ot-hide,      #ot-sync-ntfy .ot-hide {        display: none !important;      }      #onetrust-banner-sdk button.ot-link-btn:hover,      #onetrust-pc-sdk button.ot-link-btn:hover,      #ot-sync-ntfy button.ot-link-btn:hover {        text-decoration: underline;        opacity: 1;      }      #onetrust-pc-sdk .ot-sdk-row .ot-sdk-column {        padding: 0;      }      #onetrust-pc-sdk .ot-sdk-container {        padding-right: 0;      }      #onetrust-pc-sdk .ot-sdk-row {        flex-direction: initial;        width: 100%;      }      #onetrust-pc-sdk [type="checkbox"]:checked,      #onetrust-pc-sdk [type="checkbox"]:not(:checked) {        pointer-events: initial;      }      #onetrust-pc-sdk [type="checkbox"]:disabled + label::before,      #onetrust-pc-sdk [type="checkbox"]:disabled + label:after,      #onetrust-pc-sdk [type="checkbox"]:disabled + label {        pointer-events: none;        opacity: 0.8;      }      #onetrust-pc-sdk #vendor-list-content {        transform: translate3d(0, 0, 0);      }      #onetrust-pc-sdk li input[type="checkbox"] {        z-index: 1;      }      #onetrust-pc-sdk li .ot-checkbox label {        z-index: 2;      }      #onetrust-pc-sdk li .ot-checkbox input[type="checkbox"] {        height: auto;        width: auto;      }      #onetrust-pc-sdk li .host-title a,      #onetrust-pc-sdk li .ot-host-name a,      #onetrust-pc-sdk li .accordion-text,      #onetrust-pc-sdk li .ot-acc-txt {        z-index: 2;        position: relative;      }      #onetrust-pc-sdk input {        margin: 3px 0.1ex;      }      #onetrust-pc-sdk .pc-logo,      #onetrust-pc-sdk .ot-pc-logo {        height: 60px;        width: 180px;        background-position: center;        background-size: contain;        background-repeat: no-repeat;        display: inline-flex;        justify-content: center;        align-items: center;      }      #onetrust-pc-sdk .pc-logo img,      #onetrust-pc-sdk .ot-pc-logo img {        max-height: 100%;        max-width: 100%;      }      #onetrust-pc-sdk .pc-logo svg,      #onetrust-pc-sdk .ot-pc-logo svg {        height: 60px;        width: 180px;      }      #onetrust-pc-sdk #close-pc-btn-handler > svg {        margin: auto;        display: block;        height: 12px;        width: 12px;      }      #onetrust-pc-sdk #ot-pc-desc svg,      #onetrust-pc-sdk .ot-desc-cntr svg,      #onetrust-pc-sdk .ot-cat-grp svg {        height: 13px;        width: 13px;        margin-left: -7px;        vertical-align: middle;        margin-right: 5px;      }      #onetrust-pc-sdk .ot-host-hdr > a {        display: inline-block;      }      #onetrust-pc-sdk .screen-reader-only,      #onetrust-pc-sdk .ot-scrn-rdr,      .ot-sdk-cookie-policy .screen-reader-only,      .ot-sdk-cookie-policy .ot-scrn-rdr {        border: 0;        clip: rect(0 0 0 0);        height: 1px;        margin: -1px;        overflow: hidden;        padding: 0;        position: absolute;        width: 1px;      }      #onetrust-pc-sdk.ot-fade-in,      .onetrust-pc-dark-filter.ot-fade-in,      #onetrust-banner-sdk.ot-fade-in,      .ot-confirm-dialog-overlay.ot-fade-in {        animation-name: onetrust-fade-in;        animation-duration: 400ms;        animation-timing-function: ease-in-out;      }      #onetrust-pc-sdk.ot-hide {        display: none !important;      }      .onetrust-pc-dark-filter.ot-hide {        display: none !important;      }      #ot-sdk-btn.ot-sdk-show-settings,      #ot-sdk-btn.optanon-show-settings {        color: #fff;        background-color: #468254;        height: auto;        white-space: normal;        word-wrap: break-word;        padding: 0.8em 2em;        font-size: 0.8em;        line-height: 1.2;        cursor: pointer;        -moz-transition: 0.1s ease;        -o-transition: 0.1s ease;        -webkit-transition: 1s ease;        transition: 0.1s ease;      }      #ot-sdk-btn.ot-sdk-show-settings:hover,      #ot-sdk-btn.optanon-show-settings:hover {        color: #fff;        background-color: #2c6415;      }      #ot-sdk-btn.ot-sdk-show-settings:active,      #ot-sdk-btn.optanon-show-settings:active {        color: #fff;        background-color: #2c6415;        border: 1px solid rgba(162, 192, 169, 0.5);      }      .onetrust-pc-dark-filter {        background: rgba(0, 0, 0, 0.5);        z-index: 2147483646;        width: 100%;        height: 100%;        overflow: hidden;        position: fixed;        top: 0;        bottom: 0;        left: 0;      }      @keyframes onetrust-fade-in {        0% {          opacity: 0;        }        100% {          opacity: 1;        }      }      .ot-cookie-label {        text-decoration: underline;      }      @media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape) {        #onetrust-pc-sdk p {          font-size: 0.75em;        }      }      #onetrust-banner-sdk .banner-option-input:focus + label {        outline: 1px solid #000;        outline-style: auto;      }      .category-vendors-list-handler + a:focus,      .category-vendors-list-handler + a:focus-visible {        outline: 2px solid #000;      }      #onetrust-pc-sdk .ot-userid-title {        margin-top: 10px;      }      #onetrust-pc-sdk .ot-userid-title > span,      #onetrust-pc-sdk .ot-userid-timestamp > span {        font-weight: 700;      }      #onetrust-pc-sdk .ot-userid-desc {        font-style: italic;      }      #onetrust-pc-sdk .ot-host-desc a {        pointer-events: initial;      }      #onetrust-pc-sdk .ot-ven-hdr > p a {        position: relative;        z-index: 2;        pointer-events: initial;      }      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info a {        margin-right: 8px;      }      #onetrust-pc-sdk .ot-vnd-item svg.ot-ext-lnk {        align-self: center;      }      #onetrust-pc-sdk .ot-pc-footer-logo svg,      #onetrust-pc-sdk .ot-pc-footer-logo img {        width: 136px;        height: 16px;      }      #onetrust-pc-sdk .ot-pur-vdr-count {        font-weight: 400;        font-size: 0.8em;        padding-top: 3px;        display: block;      }      #onetrust-pc-sdk p[role="heading"] .ot-pur-vdr-count {        font-weight: 400 !important;        font-size: 0.8em !important;      }      #onetrust-banner-sdk #onetrust-policy .ot-optout-signal,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal {        border: 1px solid #32ae88;        border-radius: 3px;        padding: 5px;        margin-bottom: 10px;        background-color: #f9fffa;        font-size: 0.85rem;        line-height: 2;      }      #onetrust-banner-sdk #onetrust-policy .ot-optout-signal .ot-optout-icon,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal .ot-optout-icon {        display: inline;        margin-right: 5px;      }      #onetrust-banner-sdk #onetrust-policy .ot-optout-signal svg,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal svg {        height: 20px;        width: 30px;      }      #onetrust-banner-sdk        #onetrust-policy        .ot-optout-signal        svg.ot-source-sprite,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal svg.ot-source-sprite {        position: relative;        bottom: -3px;      }      #onetrust-banner-sdk        #onetrust-policy        .ot-optout-signal        svg:not(.ot-source-sprite),      #onetrust-pc-sdk        #ot-pc-content        .ot-optout-signal        svg:not(.ot-source-sprite) {        transform: scale(0.5);      }      #onetrust-banner-sdk        #onetrust-policy        .ot-optout-signal        svg:not(.ot-source-sprite)        path,      #onetrust-pc-sdk        #ot-pc-content        .ot-optout-signal        svg:not(.ot-source-sprite)        path {        fill: #32ae88;      }      #onetrust-consent-sdk .ot-general-modal {        overflow: hidden;        position: fixed;        margin: 0 auto;        top: 50%;        left: 50%;        width: 40%;        padding: 1.5rem;        max-width: 575px;        min-width: 575px;        z-index: 2147483647;        border-radius: 2.5px;        transform: translate(-50%, -50%);      }      #onetrust-consent-sdk .ot-signature-health-group {        margin-top: 1rem;        padding-left: 1.25rem;        padding-right: 1.25rem;        margin-bottom: 0.625rem;        width: calc(100% - 2.5rem);      }      #onetrust-consent-sdk        .ot-signature-health-group        .ot-signature-health-form {        gap: 0.5rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-health-form {        width: 70%;        gap: 0.35rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-input {        height: 38px;        padding: 6px 10px;        background-color: #fff;        border: 1px solid #d1d1d1;        border-radius: 4px;        box-shadow: none;        box-sizing: border-box;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-subtitle {        font-size: 1.125rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-group-title {        font-size: 1.25rem;        font-weight: bold;      }      #onetrust-consent-sdk .ot-signature-health,      #onetrust-consent-sdk .ot-signature-health-group {        display: flex;        flex-direction: column;        gap: 1rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-cont,      #onetrust-consent-sdk .ot-signature-health-group .ot-signature-cont {        display: flex;        flex-direction: column;        gap: 0.25rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-paragraph,      #onetrust-consent-sdk .ot-signature-health-group .ot-signature-paragraph {        margin: 0;        line-height: 20px;        font-size: max(14px, 0.875rem);      }      #onetrust-consent-sdk .ot-signature-health .ot-health-signature-error,      #onetrust-consent-sdk        .ot-signature-health-group        .ot-health-signature-error {        color: #4d4d4d;        font-size: min(12px, 0.75rem);      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-buttons-cont,      #onetrust-consent-sdk        .ot-signature-health-group        .ot-signature-buttons-cont {        margin-top: max(0.75rem, 2%);        gap: 1rem;        display: flex;        justify-content: flex-end;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-button,      #onetrust-consent-sdk .ot-signature-health-group .ot-signature-button {        flex: 1;        height: auto;        color: #fff;        cursor: pointer;        line-height: 1.2;        min-width: 125px;        font-weight: 600;        font-size: 0.813em;        border-radius: 2px;        padding: 12px 10px;        white-space: normal;        word-wrap: break-word;        word-break: break-word;        background-color: #68b631;        border: 2px solid #68b631;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-button.reject,      #onetrust-consent-sdk        .ot-signature-health-group        .ot-signature-button.reject {        background-color: #fff;      }      #onetrust-consent-sdk .ot-input-field-cont {        display: flex;        flex-direction: column;        gap: 0.5rem;      }      #onetrust-consent-sdk .ot-input-field-cont .ot-signature-input {        width: 65%;      }      #onetrust-consent-sdk .ot-signature-health-form {        display: flex;        flex-direction: column;      }      #onetrust-consent-sdk .ot-signature-health-form .ot-signature-label {        margin-bottom: 0;        line-height: 20px;        font-size: max(14px, 0.875rem);      }      #onetrust-consent-sdk #onetrust-sprite-svg {        display: none;      }      @media only screen and (max-width: 600px) {        #onetrust-consent-sdk .ot-general-modal {          min-width: 100%;        }        #onetrust-consent-sdk .ot-signature-health .ot-signature-health-form {          width: 100%;        }        #onetrust-consent-sdk .ot-input-field-cont .ot-signature-input {          width: 100%;        }      }      #onetrust-banner-sdk,      #onetrust-pc-sdk,      #ot-sdk-cookie-policy,      #ot-sync-ntfy {        font-size: 16px;      }      #onetrust-banner-sdk *,      #onetrust-banner-sdk ::after,      #onetrust-banner-sdk ::before,      #onetrust-pc-sdk *,      #onetrust-pc-sdk ::after,      #onetrust-pc-sdk ::before,      #ot-sdk-cookie-policy *,      #ot-sdk-cookie-policy ::after,      #ot-sdk-cookie-policy ::before,      #ot-sync-ntfy *,      #ot-sync-ntfy ::after,      #ot-sync-ntfy ::before {        -webkit-box-sizing: content-box;        -moz-box-sizing: content-box;        box-sizing: content-box;      }      #onetrust-banner-sdk div,      #onetrust-banner-sdk span,      #onetrust-banner-sdk h1,      #onetrust-banner-sdk h2,      #onetrust-banner-sdk h3,      #onetrust-banner-sdk h4,      #onetrust-banner-sdk h5,      #onetrust-banner-sdk h6,      #onetrust-banner-sdk p,      #onetrust-banner-sdk img,      #onetrust-banner-sdk svg,      #onetrust-banner-sdk button,      #onetrust-banner-sdk section,      #onetrust-banner-sdk a,      #onetrust-banner-sdk label,      #onetrust-banner-sdk input,      #onetrust-banner-sdk ul,      #onetrust-banner-sdk li,      #onetrust-banner-sdk nav,      #onetrust-banner-sdk table,      #onetrust-banner-sdk thead,      #onetrust-banner-sdk tr,      #onetrust-banner-sdk td,      #onetrust-banner-sdk tbody,      #onetrust-banner-sdk .ot-main-content,      #onetrust-banner-sdk .ot-toggle,      #onetrust-banner-sdk #ot-content,      #onetrust-banner-sdk #ot-pc-content,      #onetrust-banner-sdk .checkbox,      #onetrust-pc-sdk div,      #onetrust-pc-sdk span,      #onetrust-pc-sdk h1,      #onetrust-pc-sdk h2,      #onetrust-pc-sdk h3,      #onetrust-pc-sdk h4,      #onetrust-pc-sdk h5,      #onetrust-pc-sdk h6,      #onetrust-pc-sdk p,      #onetrust-pc-sdk img,      #onetrust-pc-sdk svg,      #onetrust-pc-sdk button,      #onetrust-pc-sdk section,      #onetrust-pc-sdk a,      #onetrust-pc-sdk label,      #onetrust-pc-sdk input,      #onetrust-pc-sdk ul,      #onetrust-pc-sdk li,      #onetrust-pc-sdk nav,      #onetrust-pc-sdk table,      #onetrust-pc-sdk thead,      #onetrust-pc-sdk tr,      #onetrust-pc-sdk td,      #onetrust-pc-sdk tbody,      #onetrust-pc-sdk .ot-main-content,      #onetrust-pc-sdk .ot-toggle,      #onetrust-pc-sdk #ot-content,      #onetrust-pc-sdk #ot-pc-content,      #onetrust-pc-sdk .checkbox,      #ot-sdk-cookie-policy div,      #ot-sdk-cookie-policy span,      #ot-sdk-cookie-policy h1,      #ot-sdk-cookie-policy h2,      #ot-sdk-cookie-policy h3,      #ot-sdk-cookie-policy h4,      #ot-sdk-cookie-policy h5,      #ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy p,      #ot-sdk-cookie-policy img,      #ot-sdk-cookie-policy svg,      #ot-sdk-cookie-policy button,      #ot-sdk-cookie-policy section,      #ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy label,      #ot-sdk-cookie-policy input,      #ot-sdk-cookie-policy ul,      #ot-sdk-cookie-policy li,      #ot-sdk-cookie-policy nav,      #ot-sdk-cookie-policy table,      #ot-sdk-cookie-policy thead,      #ot-sdk-cookie-policy tr,      #ot-sdk-cookie-policy td,      #ot-sdk-cookie-policy tbody,      #ot-sdk-cookie-policy .ot-main-content,      #ot-sdk-cookie-policy .ot-toggle,      #ot-sdk-cookie-policy #ot-content,      #ot-sdk-cookie-policy #ot-pc-content,      #ot-sdk-cookie-policy .checkbox,      #ot-sync-ntfy div,      #ot-sync-ntfy span,      #ot-sync-ntfy h1,      #ot-sync-ntfy h2,      #ot-sync-ntfy h3,      #ot-sync-ntfy h4,      #ot-sync-ntfy h5,      #ot-sync-ntfy h6,      #ot-sync-ntfy p,      #ot-sync-ntfy img,      #ot-sync-ntfy svg,      #ot-sync-ntfy button,      #ot-sync-ntfy section,      #ot-sync-ntfy a,      #ot-sync-ntfy label,      #ot-sync-ntfy input,      #ot-sync-ntfy ul,      #ot-sync-ntfy li,      #ot-sync-ntfy nav,      #ot-sync-ntfy table,      #ot-sync-ntfy thead,      #ot-sync-ntfy tr,      #ot-sync-ntfy td,      #ot-sync-ntfy tbody,      #ot-sync-ntfy .ot-main-content,      #ot-sync-ntfy .ot-toggle,      #ot-sync-ntfy #ot-content,      #ot-sync-ntfy #ot-pc-content,      #ot-sync-ntfy .checkbox {        font-family: inherit;        font-weight: normal;        -webkit-font-smoothing: auto;        letter-spacing: normal;        line-height: normal;        padding: 0;        margin: 0;        height: auto;        min-height: 0;        max-height: none;        width: auto;        min-width: 0;        max-width: none;        border-radius: 0;        border: none;        clear: none;        float: none;        position: static;        bottom: auto;        left: auto;        right: auto;        top: auto;        text-align: left;        text-decoration: none;        text-indent: 0;        text-shadow: none;        text-transform: none;        white-space: normal;        background: none;        overflow: visible;        vertical-align: baseline;        visibility: visible;        z-index: auto;        box-shadow: none;      }      #onetrust-banner-sdk img,      #onetrust-pc-sdk img,      #ot-sdk-cookie-policy img,      #ot-sync-ntfy img {        overflow: hidden !important;      }      #onetrust-banner-sdk label:before,      #onetrust-banner-sdk label:after,      #onetrust-banner-sdk .checkbox:after,      #onetrust-banner-sdk .checkbox:before,      #onetrust-pc-sdk label:before,      #onetrust-pc-sdk label:after,      #onetrust-pc-sdk .checkbox:after,      #onetrust-pc-sdk .checkbox:before,      #ot-sdk-cookie-policy label:before,      #ot-sdk-cookie-policy label:after,      #ot-sdk-cookie-policy .checkbox:after,      #ot-sdk-cookie-policy .checkbox:before,      #ot-sync-ntfy label:before,      #ot-sync-ntfy label:after,      #ot-sync-ntfy .checkbox:after,      #ot-sync-ntfy .checkbox:before {        content: "";        content: none;      }      #onetrust-banner-sdk .ot-sdk-container,      #onetrust-pc-sdk .ot-sdk-container,      #ot-sdk-cookie-policy .ot-sdk-container {        position: relative;        width: 100%;        max-width: 100%;        margin: 0 auto;        padding: 0 20px;        box-sizing: border-box;      }      #onetrust-banner-sdk .ot-sdk-column,      #onetrust-banner-sdk .ot-sdk-columns,      #onetrust-pc-sdk .ot-sdk-column,      #onetrust-pc-sdk .ot-sdk-columns,      #ot-sdk-cookie-policy .ot-sdk-column,      #ot-sdk-cookie-policy .ot-sdk-columns {        width: 100%;        float: left;        box-sizing: border-box;        padding: 0;        display: initial;      }      @media (min-width: 400px) {        #onetrust-banner-sdk .ot-sdk-container,        #onetrust-pc-sdk .ot-sdk-container,        #ot-sdk-cookie-policy .ot-sdk-container {          width: 90%;          padding: 0;        }      }      @media (min-width: 550px) {        #onetrust-banner-sdk .ot-sdk-container,        #onetrust-pc-sdk .ot-sdk-container,        #ot-sdk-cookie-policy .ot-sdk-container {          width: 100%;        }        #onetrust-banner-sdk .ot-sdk-column,        #onetrust-banner-sdk .ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-column,        #onetrust-pc-sdk .ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-column,        #ot-sdk-cookie-policy .ot-sdk-columns {          margin-left: 4%;        }        #onetrust-banner-sdk .ot-sdk-column:first-child,        #onetrust-banner-sdk .ot-sdk-columns:first-child,        #onetrust-pc-sdk .ot-sdk-column:first-child,        #onetrust-pc-sdk .ot-sdk-columns:first-child,        #ot-sdk-cookie-policy .ot-sdk-column:first-child,        #ot-sdk-cookie-policy .ot-sdk-columns:first-child {          margin-left: 0;        }        #onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns {          width: 13.3333333333%;        }        #onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns {          width: 22%;        }        #onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns {          width: 30.6666666667%;        }        #onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns {          width: 65.3333333333%;        }        #onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns {          width: 74%;        }        #onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns {          width: 82.6666666667%;        }        #onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns {          width: 91.3333333333%;        }        #onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns {          width: 100%;          margin-left: 0;        }      }      #onetrust-banner-sdk h1,      #onetrust-banner-sdk h2,      #onetrust-banner-sdk h3,      #onetrust-banner-sdk h4,      #onetrust-banner-sdk h5,      #onetrust-banner-sdk h6,      #onetrust-banner-sdk p[role="heading"],      #onetrust-pc-sdk h1,      #onetrust-pc-sdk h2,      #onetrust-pc-sdk h3,      #onetrust-pc-sdk h4,      #onetrust-pc-sdk h5,      #onetrust-pc-sdk h6,      #onetrust-pc-sdk p[role="heading"],      #ot-sdk-cookie-policy h1,      #ot-sdk-cookie-policy h2,      #ot-sdk-cookie-policy h3,      #ot-sdk-cookie-policy h4,      #ot-sdk-cookie-policy h5,      #ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy p[role="heading"] {        margin-top: 0;        font-weight: 600;        font-family: inherit;      }      #onetrust-banner-sdk h1,      #onetrust-pc-sdk h1,      #ot-sdk-cookie-policy h1 {        font-size: 1.5rem;        line-height: 1.2;      }      #onetrust-banner-sdk h2,      #onetrust-pc-sdk h2,      #ot-sdk-cookie-policy h2 {        font-size: 1.5rem;        line-height: 1.25;      }      #onetrust-banner-sdk h3,      #onetrust-pc-sdk h3,      #ot-sdk-cookie-policy h3 {        font-size: 1.5rem;        line-height: 1.3;      }      #onetrust-banner-sdk h4,      #onetrust-pc-sdk h4,      #ot-sdk-cookie-policy h4 {        font-size: 1.5rem;        line-height: 1.35;      }      #onetrust-banner-sdk h5,      #onetrust-pc-sdk h5,      #ot-sdk-cookie-policy h5 {        font-size: 1.5rem;        line-height: 1.5;      }      #onetrust-banner-sdk h6,      #onetrust-pc-sdk h6,      #ot-sdk-cookie-policy h6 {        font-size: 1.5rem;        line-height: 1.6;      }      @media (min-width: 550px) {        #onetrust-banner-sdk h1,        #onetrust-pc-sdk h1,        #ot-sdk-cookie-policy h1 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h2,        #onetrust-pc-sdk h2,        #ot-sdk-cookie-policy h2 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h3,        #onetrust-pc-sdk h3,        #ot-sdk-cookie-policy h3 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h4,        #onetrust-pc-sdk h4,        #ot-sdk-cookie-policy h4 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h5,        #onetrust-pc-sdk h5,        #ot-sdk-cookie-policy h5 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h6,        #onetrust-pc-sdk h6,        #ot-sdk-cookie-policy h6 {          font-size: 1.5rem;        }      }      #onetrust-banner-sdk p:not([role="heading"]),      #onetrust-pc-sdk p:not([role="heading"]),      #ot-sdk-cookie-policy p:not([role="heading"]) {        margin: 0 0 1em 0;        font-family: inherit;        line-height: normal;      }      #onetrust-banner-sdk a,      #onetrust-pc-sdk a,      #ot-sdk-cookie-policy a {        color: #565656;        text-decoration: underline;      }      #onetrust-banner-sdk a:hover,      #onetrust-pc-sdk a:hover,      #ot-sdk-cookie-policy a:hover {        color: #565656;        text-decoration: none;      }      #onetrust-banner-sdk .ot-sdk-button,      #onetrust-banner-sdk button,      #onetrust-pc-sdk .ot-sdk-button,      #onetrust-pc-sdk button,      #ot-sdk-cookie-policy .ot-sdk-button,      #ot-sdk-cookie-policy button {        margin-bottom: 1rem;        font-family: inherit;      }      #onetrust-banner-sdk .ot-sdk-button,      #onetrust-banner-sdk button,      #onetrust-pc-sdk .ot-sdk-button,      #onetrust-pc-sdk button,      #ot-sdk-cookie-policy .ot-sdk-button,      #ot-sdk-cookie-policy button {        display: inline-block;        height: 38px;        padding: 0 30px;        color: #555;        text-align: center;        font-size: 0.9em;        font-weight: 400;        line-height: 38px;        letter-spacing: 0.01em;        text-decoration: none;        white-space: nowrap;        background-color: rgba(0, 0, 0, 0);        border-radius: 2px;        border: 1px solid #bbb;        cursor: pointer;        box-sizing: border-box;      }      #onetrust-banner-sdk .ot-sdk-button:hover,      #onetrust-banner-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):hover,      #onetrust-banner-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):focus,      #onetrust-pc-sdk .ot-sdk-button:hover,      #onetrust-pc-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):hover,      #onetrust-pc-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):focus,      #ot-sdk-cookie-policy .ot-sdk-button:hover,      #ot-sdk-cookie-policy        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):hover,      #ot-sdk-cookie-policy        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):focus {        color: #333;        border-color: #888;        opacity: 0.9;      }      #onetrust-banner-sdk .ot-sdk-button:focus,      #onetrust-banner-sdk :not(.ot-leg-btn-container) > button:focus,      #onetrust-pc-sdk .ot-sdk-button:focus,      #onetrust-pc-sdk :not(.ot-leg-btn-container) > button:focus,      #ot-sdk-cookie-policy .ot-sdk-button:focus,      #ot-sdk-cookie-policy :not(.ot-leg-btn-container) > button:focus {        outline: 2px solid #000;      }      #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,      #onetrust-banner-sdk button.ot-sdk-button-primary,      #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,      #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,      #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,      #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,      #onetrust-pc-sdk button.ot-sdk-button-primary,      #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,      #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,      #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,      #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,      #ot-sdk-cookie-policy button.ot-sdk-button-primary,      #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,      #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,      #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary {        color: #fff;        background-color: #33c3f0;        border-color: #33c3f0;      }      #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,      #onetrust-banner-sdk button.ot-sdk-button-primary:hover,      #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,      #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,      #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,      #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,      #onetrust-banner-sdk button.ot-sdk-button-primary:focus,      #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,      #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,      #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,      #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,      #onetrust-pc-sdk button.ot-sdk-button-primary:hover,      #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,      #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,      #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,      #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,      #onetrust-pc-sdk button.ot-sdk-button-primary:focus,      #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,      #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,      #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus {        color: #fff;        background-color: #1eaedb;        border-color: #1eaedb;      }      #onetrust-banner-sdk input[type="text"],      #onetrust-pc-sdk input[type="text"],      #ot-sdk-cookie-policy input[type="text"] {        height: 38px;        padding: 6px 10px;        background-color: #fff;        border: 1px solid #707070;        border-radius: 4px;        box-shadow: none;        box-sizing: border-box;      }      #onetrust-banner-sdk input[type="text"],      #onetrust-pc-sdk input[type="text"],      #ot-sdk-cookie-policy input[type="text"] {        -webkit-appearance: none;        -moz-appearance: none;        appearance: none;      }      #onetrust-banner-sdk input[type="text"]:focus,      #onetrust-pc-sdk input[type="text"]:focus,      #ot-sdk-cookie-policy input[type="text"]:focus {        border: 1px solid #000;        outline: 0;      }      #onetrust-banner-sdk label,      #onetrust-pc-sdk label,      #ot-sdk-cookie-policy label {        display: block;        margin-bottom: 0.5rem;        font-weight: 600;      }      #onetrust-banner-sdk input[type="checkbox"],      #onetrust-pc-sdk input[type="checkbox"],      #ot-sdk-cookie-policy input[type="checkbox"] {        display: inline;      }      #onetrust-banner-sdk ul,      #onetrust-pc-sdk ul,      #ot-sdk-cookie-policy ul {        list-style: circle inside;      }      #onetrust-banner-sdk ul,      #onetrust-pc-sdk ul,      #ot-sdk-cookie-policy ul {        padding-left: 0;        margin-top: 0;      }      #onetrust-banner-sdk ul ul,      #onetrust-pc-sdk ul ul,      #ot-sdk-cookie-policy ul ul {        margin: 1.5rem 0 1.5rem 3rem;        font-size: 90%;      }      #onetrust-banner-sdk li,      #onetrust-pc-sdk li,      #ot-sdk-cookie-policy li {        margin-bottom: 1rem;      }      #onetrust-banner-sdk th,      #onetrust-banner-sdk td,      #onetrust-pc-sdk th,      #onetrust-pc-sdk td,      #ot-sdk-cookie-policy th,      #ot-sdk-cookie-policy td {        padding: 12px 15px;        text-align: left;        border-bottom: 1px solid #e1e1e1;      }      #onetrust-banner-sdk button,      #onetrust-pc-sdk button,      #ot-sdk-cookie-policy button {        margin-bottom: 1rem;        font-family: inherit;      }      #onetrust-banner-sdk .ot-sdk-container:after,      #onetrust-banner-sdk .ot-sdk-row:after,      #onetrust-pc-sdk .ot-sdk-container:after,      #onetrust-pc-sdk .ot-sdk-row:after,      #ot-sdk-cookie-policy .ot-sdk-container:after,      #ot-sdk-cookie-policy .ot-sdk-row:after {        content: "";        display: table;        clear: both;      }      #onetrust-banner-sdk .ot-sdk-row,      #onetrust-pc-sdk .ot-sdk-row,      #ot-sdk-cookie-policy .ot-sdk-row {        margin: 0;        max-width: none;        display: block;      }      #onetrust-banner-sdk.otFloatingFlat {        position: fixed;        width: 58%;        max-width: 760px;        min-height: 135px;        font-size: 16px;        right: 2em;        bottom: 2em;        z-index: 2147483645;        box-shadow: 0 0 4px 0;        -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.35);        -moz-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.35);        max-height: 90%;        overflow-x: hidden;        overflow-y: auto;        padding-top: 2px;      }      #onetrust-banner-sdk.otFloatingFlat.otRelFont {        font-size: 1rem;      }      #onetrust-banner-sdk.otFloatingFlat::-webkit-scrollbar {        width: 11px;      }      #onetrust-banner-sdk.otFloatingFlat::-webkit-scrollbar-thumb {        border-radius: 10px;        background: #c1c1c1;      }      #onetrust-banner-sdk.otFloatingFlat {        scrollbar-arrow-color: #c1c1c1;        scrollbar-darkshadow-color: #c1c1c1;        scrollbar-face-color: #c1c1c1;        scrollbar-shadow-color: #c1c1c1;      }      #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left,      #onetrust-banner-sdk.otFloatingFlat[dir="rtl"] {        left: 2em;        right: auto;      }      #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left[dir="rtl"] {        right: 2em;        left: auto;      }      #onetrust-banner-sdk.otFloatingFlat .banner-close-btn-container button {        position: relative;      }      #onetrust-banner-sdk.otFloatingFlat        .banner-close-btn-container        button        .ot-svg-icon {        width: 30%;        height: auto;        top: 50%;        left: 50%;        transform: translate(-50%, -50%);        position: absolute;        pointer-events: none;      }      #onetrust-banner-sdk .ot-sdk-container {        background-color: #fff;        padding-top: 16px;        padding-bottom: 16px;        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);      }      #onetrust-banner-sdk .banner-options-card {        margin-top: 10px;      }      #onetrust-banner-sdk a {        color: #dcdcdc;      }      #onetrust-banner-sdk p[aria-level="3"] {        margin-bottom: 0.4em;      }      #onetrust-banner-sdk .policy {        overflow: hidden;        margin: 0 15px 0 20px;      }      #onetrust-banner-sdk .policy a {        font-weight: bold;      }      #onetrust-banner-sdk #onetrust-policy .ot-gv-list-handler {        font-size: 0.812em;        margin: 0;        float: left;        padding: 10px 0 0 0;        border: 0;        line-height: normal;        height: auto;        width: auto;      }      #onetrust-banner-sdk #onetrust-policy-title {        color: dimgray;        font-size: 1em;        line-height: 1;        float: left;        font-weight: 600;        padding-bottom: 10px;        margin-bottom: 0;      }      #onetrust-banner-sdk #onetrust-policy-text,      #onetrust-banner-sdk .ot-b-addl-desc {        clear: both;        float: left;        color: dimgray;      }      #onetrust-banner-sdk #onetrust-policy-text,      #onetrust-banner-sdk .ot-b-addl-desc,      #onetrust-banner-sdk .ot-dpd-desc {        font-size: 0.813em;        line-height: 1.5;        margin: 0;      }      #onetrust-banner-sdk #onetrust-policy-text *,      #onetrust-banner-sdk .ot-b-addl-desc *,      #onetrust-banner-sdk .ot-dpd-desc * {        font-size: inherit;        line-height: inherit;      }      #onetrust-banner-sdk #onetrust-policy-text * {        margin-bottom: 0;      }      #onetrust-banner-sdk #onetrust-button-group {        position: relative;        margin-right: 20px;        right: 0;        left: auto;      }      #onetrust-banner-sdk        #onetrust-button-group.ot-button-order-container        #onetrust-accept-btn-handler,      #onetrust-banner-sdk        #onetrust-button-group.ot-button-order-container        #onetrust-reject-all-handler,      #onetrust-banner-sdk        #onetrust-button-group.ot-button-order-container        #onetrust-pc-btn-handler {        margin-bottom: 10px;      }      #onetrust-banner-sdk .pc-btn-container {        text-align: center;      }      #onetrust-banner-sdk .banner-close-btn-container {        overflow: hidden;        margin-bottom: 5px;      }      #onetrust-banner-sdk .banner-close-btn-container button {        float: right;        line-height: normal;        cursor: pointer;        padding: 0;        border: none;        margin-right: 1em;      }      #onetrust-banner-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler,      #onetrust-banner-sdk #onetrust-pc-btn-handler {        background-color: #68b631;        color: #fff;        border-color: #68b631;        font-size: 0.813em;        font-weight: 600;        line-height: 1;        height: auto;        white-space: normal;        word-break: break-word;        word-wrap: break-word;        min-width: 125px;        width: 100%;        padding: 12px 10px;      }      #onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {        background-color: #fff;        border: none;        color: #68b631;        text-decoration: underline;        padding-left: 0;        padding-right: 0;        box-shadow: none;      }      #onetrust-banner-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler {        margin-bottom: 10px;      }      #onetrust-banner-sdk .accept-btn-container,      #onetrust-banner-sdk .reject-btn-container {        text-align: center;      }      #onetrust-banner-sdk .banner_logo {        display: none;      }      #onetrust-banner-sdk .ot-bnr-logo {        margin: 4px 10px;      }      #onetrust-banner-sdk #banner-options {        float: left;        padding: 0 20px;        width: calc(100% - 40px);      }      #onetrust-banner-sdk .banner-option {        margin-bottom: 12px;      }      #onetrust-banner-sdk .banner-option-input {        cursor: pointer;        border: none;        height: auto;        padding: 0;        padding-right: 3px;        margin: 0 0 6px;        font-size: 0.82em;        line-height: 1.4;      }      #onetrust-banner-sdk .banner-option-input * {        pointer-events: none;        font-size: inherit;        line-height: inherit;      }      #onetrust-banner-sdk        .banner-option-input[aria-expanded="true"]        .ot-arrow-container {        transform: rotate(90deg);      }      #onetrust-banner-sdk        .banner-option-input[aria-expanded="true"]        ~ .banner-option-details {        height: auto;        display: block;      }      #onetrust-banner-sdk .banner-option-header {        cursor: pointer;        display: inline-block;      }      #onetrust-banner-sdk .banner-option-header :first-child {        color: dimgray;        font-weight: bold;        float: left;      }      #onetrust-banner-sdk .ot-arrow-container {        display: inline-block;        border-top: 6px solid rgba(0, 0, 0, 0);        border-bottom: 6px solid rgba(0, 0, 0, 0);        border-left: 6px solid dimgray;        margin-left: 10px;        vertical-align: middle;      }      #onetrust-banner-sdk .banner-option-details {        display: none;        font-size: 0.83em;        line-height: 1.5;        height: 0px;        padding: 10px 10px 5px 10px;      }      #onetrust-banner-sdk .banner-option-details * {        font-size: inherit;        line-height: inherit;        color: dimgray;      }      #onetrust-banner-sdk .ot-arrow-container,      #onetrust-banner-sdk .banner-option-details {        transition: all 300ms ease-in 0s;        -webkit-transition: all 300ms ease-in 0s;        -moz-transition: all 300ms ease-in 0s;        -o-transition: all 300ms ease-in 0s;      }      #onetrust-banner-sdk.ot-iab-2 {        box-shadow: none;      }      #onetrust-banner-sdk.ot-iab-2 .ot-sdk-container {        border-radius: 5px;        width: calc(100% - 4px);      }      #onetrust-banner-sdk.ot-iab-2 .ot-sdk-container:last-of-type {        margin-bottom: 2px;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container {        margin-top: 5px;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container button {        text-align: center;        border-radius: 50%;        height: 54px;        width: 54px;        background-color: #fff;        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);        background-size: 15px;        margin: 5px;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container button:hover {        opacity: 1;      }      #onetrust-banner-sdk.ot-iab-2.ot-bottom-left .ot-close-icon {        float: left;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container {        position: absolute;        top: 0;        right: 0;      }      #onetrust-banner-sdk.ot-iab-2 .ot-top-cntr {        margin-top: 74px;      }      #onetrust-banner-sdk .ot-dpd-container {        padding: 16px 20px;        margin-bottom: 10px;      }      #onetrust-banner-sdk .onetrust-vendors-list-handler {        display: block;        margin-left: 0px;        margin-top: 5px;        clear: both;        margin-bottom: 0;        padding: 0;        border: 0;        height: auto;        width: auto;      }      #onetrust-banner-sdk .ot-dpd-desc {        color: dimgray;        font-size: 0.88em;        line-height: 1.4;      }      #onetrust-banner-sdk .ot-dpd-title {        font-size: 1em;        line-height: 1.4;        font-weight: 600;        padding-bottom: 10px;        margin: 0;      }      #onetrust-banner-sdk .ot-dpd-desc *,      #onetrust-banner-sdk .ot-dpd-title * {        font-size: inherit;        line-height: inherit;      }      #onetrust-banner-sdk .ot-b-addl-desc {        display: block;        width: 100%;        margin-top: 10px;        margin-bottom: 10px;      }      #onetrust-banner-sdk .ot-dpd-desc > .ot-b-addl-desc {        font-size: 1em;      }      #onetrust-banner-sdk.ot-close-btn-link .ot-sdk-container:first-of-type {        margin-top: 2px;      }      #onetrust-banner-sdk.ot-close-btn-link .banner-close-btn-container {        overflow: visible;        margin: 0;        position: static;      }      #onetrust-banner-sdk.ot-close-btn-link        .banner-close-btn-container        button {        margin: 0;        white-space: pre-wrap;        border: none;        height: auto;        line-height: 1.5;        text-decoration: underline;        font-size: 0.69em;        width: 100%;        min-width: 175px;        float: none;        margin-bottom: 10px;        background-color: rgba(0, 0, 0, 0);        box-shadow: none;      }      #onetrust-banner-sdk .ot-close-icon {        height: 44px;        width: 44px;        background-size: 12px;      }      @media (max-width: 550px) {        #onetrust-banner-sdk.otFloatingFlat .policy {          padding-bottom: 10px;          overflow: hidden;        }        #onetrust-banner-sdk.otFloatingFlat #onetrust-pc-btn-handler {          margin-bottom: 5px;        }      }      @media (max-width: 800px) {        #onetrust-banner-sdk.otFloatingFlat,        #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left {          left: 0;          width: 100%;          bottom: 0;          border-radius: 0;        }        #onetrust-banner-sdk #banner-options {          padding: 0;          width: 100%;        }        #onetrust-banner-sdk .ot-sdk-container {          padding: 15px 20px 0 20px;          width: 100%;        }        #onetrust-banner-sdk .policy {          margin: 0;        }        #onetrust-banner-sdk #onetrust-button-group {          margin: 0;        }        #onetrust-banner-sdk #onetrust-accept-btn-handler,        #onetrust-banner-sdk #onetrust-reject-all-handler {          width: 100%;          margin-bottom: 5px;        }        #onetrust-banner-sdk.otFloatingFlat[dir="rtl"],        #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left[dir="rtl"] {          right: 0;        }      }      @media only screen and (max-device-width: 767px) {        #onetrust-banner-sdk .banner-close-btn-container button {          margin-bottom: 0.2rem;          margin-right: 0;        }      }      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape),        (min-device-width: 834px) and (orientation: portrait),        (min-device-width: 1024px) and (orientation: portrait) {        #onetrust-banner-sdk.otFloatingFlat {          width: 74%;          border-radius: 0;          left: auto;        }      }      #onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {        background-color: #ffffff;      }      #onetrust-consent-sdk #onetrust-policy-title,      #onetrust-consent-sdk #onetrust-policy-text,      #onetrust-consent-sdk .ot-b-addl-desc,      #onetrust-consent-sdk .ot-dpd-desc,      #onetrust-consent-sdk .ot-dpd-title,      #onetrust-consent-sdk        #onetrust-policy-text        *:not(.onetrust-vendors-list-handler),      #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),      #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,      #onetrust-banner-sdk .ot-cat-header,      #onetrust-banner-sdk .ot-optout-signal {        color: #121212;      }      #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {        background-color: #e9e9e9;      }      #onetrust-consent-sdk #onetrust-banner-sdk a[href],      #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,      #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn {        color: #024ddf;      }      #onetrust-consent-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler,      #onetrust-banner-sdk #ot-dialog-confirm-handler {        background-color: #024ddf;        border-color: #024ddf;        color: #ffffff;      }      #onetrust-consent-sdk #onetrust-banner-sdk *:focus,      #onetrust-consent-sdk #onetrust-banner-sdk:focus {        outline-color: #121212;        outline-width: 1px;      }      #onetrust-consent-sdk #onetrust-pc-btn-handler,      #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link,      #onetrust-consent-sdk #ot-dialog-cancel-handler {        color: #ffffff;        border-color: #ffffff;        background-color: #024ddf;      }      #onetrust-banner-sdk #onetrust-policy-text a.ot-cookie-policy-link,      #onetrust-banner-sdk #onetrust-policy-text a.ot-imprint-link {        margin-left: 5px;      }      #onetrust-pc-sdk {        --ot-footer-space: 160px;        position: fixed;        width: 730px;        max-width: 730px;        height: 610px;        left: 0;        right: 0;        top: 0;        bottom: 0;        margin: auto;        font-size: 16px;        z-index: 2147483647;        border-radius: 2px;        background-color: #fff;        box-shadow:          0 2px 4px 0 rgba(0, 0, 0, 0),          0 7px 14px 0 rgba(50, 50, 93, 0.1);      }      #onetrust-pc-sdk.otRelFont {        font-size: 1rem;      }      #onetrust-pc-sdk *,      #onetrust-pc-sdk ::after,      #onetrust-pc-sdk ::before {        box-sizing: content-box;      }      #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr,      #onetrust-pc-sdk .ot-hide-tgl {        visibility: hidden;      }      #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr *,      #onetrust-pc-sdk .ot-hide-tgl * {        visibility: hidden;      }      #onetrust-pc-sdk #ot-pc-content,      #onetrust-pc-sdk #ot-pc-lst {        height: calc(100% - 185px);      }      #onetrust-pc-sdk li {        list-style: none;      }      #onetrust-pc-sdk ul,      #onetrust-pc-sdk li {        margin: 0;      }      #onetrust-pc-sdk ul li div:focus {        margin: 0px 2px !important;      }      #onetrust-pc-sdk ul:focus-within {        padding-top: 2px !important;      }      #onetrust-pc-sdk .ot-desc-cntr:focus {        outline-offset: -1px !important;      }      #onetrust-pc-sdk a {        text-decoration: underline;      }      #onetrust-pc-sdk .ot-link-btn {        padding: 0;        margin-bottom: 0;        border: 0;        font-weight: normal;        line-height: normal;        width: auto;        height: auto;      }      #onetrust-pc-sdk .ot-grps-cntr *::-webkit-scrollbar,      #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar {        width: 11px;      }      #onetrust-pc-sdk .ot-grps-cntr *::-webkit-scrollbar-thumb,      #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-thumb {        border-radius: 10px;        background: #c1c1c1;      }      #onetrust-pc-sdk .ot-grps-cntr *,      #onetrust-pc-sdk .ot-pc-scrollbar {        scrollbar-arrow-color: #c1c1c1;        scrollbar-darkshadow-color: #c1c1c1;        scrollbar-face-color: #c1c1c1;        scrollbar-shadow-color: #c1c1c1;      }      #onetrust-pc-sdk .ot-pc-header {        height: auto;        padding: 10px;        display: block;        width: calc(100% - 20px);        min-height: 52px;        border-bottom: 1px solid #d8d8d8;        position: relative;      }      #onetrust-pc-sdk .ot-pc-logo {        vertical-align: middle;        width: 180px;      }      #onetrust-pc-sdk .ot-pc-logo.ot-pc-logo {        height: 40px;      }      #onetrust-pc-sdk .ot-title-cntr {        position: relative;        display: inline-block;        vertical-align: middle;        width: calc(100% - 190px);        padding-left: 10px;      }      #onetrust-pc-sdk .ot-optout-signal {        margin: 0.625rem 0.625rem 0.625rem 1.75rem;      }      #onetrust-pc-sdk .ot-always-active {        font-size: 0.813em;        line-height: 1.5;        font-weight: 700;        color: #3860be;      }      #onetrust-pc-sdk .ot-close-cntr {        float: right;        position: absolute;        right: -9px;        top: 50%;        transform: translateY(-50%);      }      #onetrust-pc-sdk #ot-pc-content {        position: relative;        overflow-y: auto;        overflow-x: hidden;      }      #onetrust-pc-sdk #ot-pc-content .ot-sdk-container {        margin-left: 0;      }      #onetrust-pc-sdk .ot-grps-cntr,      #onetrust-pc-sdk .ot-grps-cntr > * {        height: 100%;        overflow-y: auto;      }      #onetrust-pc-sdk .category-menu-switch-handler {        cursor: pointer;        border-left: 10px solid rgba(0, 0, 0, 0);        background-color: #f4f4f4;        border-bottom: 1px solid #d7d7d7;        padding-top: 12px;        padding-right: 5px;        padding-bottom: 12px;        padding-left: 12px;        overflow: hidden;      }      #onetrust-pc-sdk .category-menu-switch-handler h3,      #onetrust-pc-sdk .category-menu-switch-handler p[aria-level="3"] {        float: left;        text-align: left;        margin: 0;        color: dimgray;        line-height: 1.4;        font-size: 0.875em;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-active-menu {        border-left: 10px solid #68b631;        background-color: #fff;        border-bottom: none;        position: relative;      }      #onetrust-pc-sdk .ot-active-menu h3,      #onetrust-pc-sdk .ot-active-menu p[aria-level="3"] {        color: #263238;        font-weight: bold;      }      #onetrust-pc-sdk .ot-desc-cntr {        word-break: break-word;        word-wrap: break-word;        padding-top: 20px;        padding-right: 16px;        padding-bottom: 15px;      }      #onetrust-pc-sdk .ot-grp-desc {        word-break: break-word;        word-wrap: break-word;        text-align: left;        font-size: 0.813em;        line-height: 1.5;        margin: 0;      }      #onetrust-pc-sdk .ot-grp-desc * {        font-size: inherit;        line-height: inherit;      }      #onetrust-pc-sdk #ot-pc-desc a {        color: #3860be;        cursor: pointer;        font-size: 1em;      }      #onetrust-pc-sdk #ot-pc-desc a.privacy-notice-link,      #onetrust-pc-sdk #ot-pc-desc a.ot-imprint-handler {        margin-right: 8px;      }      #onetrust-pc-sdk #ot-pc-desc a:hover {        color: #1883fd;      }      #onetrust-pc-sdk #ot-pc-desc button {        margin-right: 8px;      }      #onetrust-pc-sdk #ot-pc-desc * {        font-size: inherit;      }      #onetrust-pc-sdk #ot-pc-desc ul li {        padding: 10px 0px;        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk #ot-pc-desc + .ot-link-btn {        display: none;      }      #onetrust-pc-sdk .ot-close-icon {        background-size: 12px;        background-repeat: no-repeat;        background-position: center;        height: 44px;        width: 44px;        display: inline-block;      }      #onetrust-pc-sdk .ot-tgl {        float: right;        position: relative;        z-index: 1;      }      #onetrust-pc-sdk .ot-tgl input:checked + .ot-switch .ot-switch-nob {        background-color: #468254;        border: 1px solid #fff;      }      #onetrust-pc-sdk        .ot-tgl        input:checked        + .ot-switch        .ot-switch-nob:before {        -webkit-transform: translateX(21px);        -ms-transform: translateX(21px);        transform: translateX(21px);        background-color: #fff;      }      #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch .ot-switch-nob {        box-shadow: 0 0 1px #2196f3;        outline-style: auto !important;        outline-width: 1px !important;      }      #onetrust-pc-sdk .ot-switch {        position: relative;        display: inline-block;        width: 45px;        height: 25px;        margin-bottom: 0;      }      #onetrust-pc-sdk .ot-switch-nob {        position: absolute;        cursor: pointer;        top: 0;        left: 0;        right: 0;        bottom: 0;        background-color: #767676;        border: 1px solid #ddd;        transition: all 0.2s ease-in 0s;        -moz-transition: all 0.2s ease-in 0s;        -o-transition: all 0.2s ease-in 0s;        -webkit-transition: all 0.2s ease-in 0s;        border-radius: 20px;      }      #onetrust-pc-sdk .ot-switch-nob:before {        position: absolute;        content: "";        height: 18px;        width: 18px;        bottom: 3px;        left: 2px;        background-color: #fff;        -webkit-transition: 0.4s;        transition: 0.4s;        border-radius: 20px;      }      #onetrust-pc-sdk .ot-chkbox {        z-index: 1;        position: relative;        float: left;      }      #onetrust-pc-sdk .ot-chkbox input {        width: 28px !important;        height: 28px !important;      }      #onetrust-pc-sdk .ot-chkbox input:checked ~ label::before {        background-color: #3860be;      }      #onetrust-pc-sdk .ot-chkbox input + label::after {        content: none;        color: #fff;      }      #onetrust-pc-sdk .ot-chkbox input:checked + label::after {        content: "";      }      #onetrust-pc-sdk .ot-chkbox input:focus + label::before {        outline-style: solid;        outline-width: 2px;        outline-style: auto;      }      #onetrust-pc-sdk .ot-chkbox input[aria-checked="mixed"] ~ label::before {        background-color: #3860be;      }      #onetrust-pc-sdk .ot-chkbox input[aria-checked="mixed"] + label::after {        content: "";      }      #onetrust-pc-sdk .ot-chkbox label {        position: relative;        padding-left: 30px;        display: flex;        align-items: center;        cursor: pointer;        min-height: 28px !important;      }      #onetrust-pc-sdk .ot-chkbox label::before,      #onetrust-pc-sdk .ot-chkbox label::after {        position: absolute;        content: "";        display: inline-block;        border-radius: 3px;      }      #onetrust-pc-sdk .ot-chkbox label::before {        height: 18px;        width: 18px;        border: 1px solid #3860be;        left: 0px;        left: 4px;        top: 4px;      }      #onetrust-pc-sdk .ot-chkbox label::after {        height: 5px;        width: 9px;        border-left: 3px solid;        border-bottom: 3px solid;        transform: rotate(-45deg);        -o-transform: rotate(-45deg);        -ms-transform: rotate(-45deg);        -webkit-transform: rotate(-45deg);        left: 8px;        top: 8px;      }      #onetrust-pc-sdk .ot-label-txt {        display: none;      }      #onetrust-pc-sdk .ot-fltr-opt .ot-label-txt {        display: inline-block;      }      #onetrust-pc-sdk .ot-chkbox input,      #onetrust-pc-sdk .ot-tgl input {        position: absolute;        opacity: 0;        width: 0;        height: 0;      }      #onetrust-pc-sdk .ot-arw-cntr {        float: right;        position: relative;        pointer-events: none;      }      #onetrust-pc-sdk .ot-arw {        width: 16px;        height: 16px;        margin-left: 5px;        color: dimgray;        display: inline-block;        vertical-align: middle;        -webkit-transition: all 150ms ease-in 0s;        -moz-transition: all 150ms ease-in 0s;        -o-transition: all 150ms ease-in 0s;        transition: all 150ms ease-in 0s;      }      #onetrust-pc-sdk input:checked ~ .ot-acc-hdr .ot-arw,      #onetrust-pc-sdk        button[aria-expanded="true"]        ~ .ot-acc-hdr        .ot-arw-cntr        svg {        transform: rotate(90deg);        -o-transform: rotate(90deg);        -ms-transform: rotate(90deg);        -webkit-transform: rotate(90deg);      }      #onetrust-pc-sdk .ot-label-status {        font-size: 0.75em;        position: relative;        top: 2px;        display: none;        padding-right: 5px;        float: left;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-label-status {        top: -6px;      }      #onetrust-pc-sdk .ot-fltr-opts {        min-height: 35px;      }      #onetrust-pc-sdk .ot-fltr-btns {        margin: 10px 15px 0 15px;      }      #onetrust-pc-sdk .ot-fltr-btns button {        padding: 12px 30px;      }      #onetrust-pc-sdk .ot-pc-footer {        position: absolute;        bottom: 0px;        width: 100%;        max-height: var(--ot-footer-space);        border-top: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-pc-footer button {        margin-top: 20px;        margin-bottom: 20px;        font-weight: 600;        font-size: 0.9em;        border-radius: 2px;        min-height: 40px;        height: auto;        line-height: normal;        padding: 10px 30px;        text-align: center;        white-space: normal;        text-wrap: wrap;      }      #onetrust-pc-sdk .ot-pc-footer .ot-btn-subcntr {        float: right;      }      #onetrust-pc-sdk .ot-pc-footer .ot-btn-subcntr button {        margin-left: 15px;        margin-right: 15px;      }      #onetrust-pc-sdk .ot-pc-footer .save-preference-btn-handler {        min-width: 155px;        background-color: #68b631;        color: #fff;        margin-left: 15px;        margin-right: 15px;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container {        display: flex;        flex-wrap: wrap;        justify-content: flex-end;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        button {        float: none;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        *[class*="ot-button-order-"]:nth-of-type(1) {        min-width: 155px;        margin-left: 15px;        margin-right: auto;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        *[class*="ot-button-order-"]:nth-of-type(2),      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        *[class*="ot-button-order-"]:nth-of-type(3) {        margin-right: 15px;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container.ot-stack-buttons {        flex: 1;        width: auto;        gap: 0.5rem;        height: 100%;        padding: 0 30px;        flex-wrap: nowrap;        margin: 0.75rem 0;        align-items: center;        flex-direction: column;        justify-content: space-around;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container.ot-stack-buttons        button {        width: 100%;        margin: 0 !important;      }      #onetrust-pc-sdk.ot-ftr-stacked {        --ot-footer-space: 210px;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer {        display: flex;        flex-direction: column;        height: auto;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button {        width: calc(100% - 33px);      }      #onetrust-pc-sdk.ot-ftr-stacked        .ot-pc-footer        button.save-preference-btn-handler,      #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button:not(:last-child) {        margin-bottom: 0;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr {        float: none;        text-align: center;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button:not(:last-child) {        margin-bottom: 0;      }      #onetrust-pc-sdk .ot-tab-desc {        margin-left: 3%;      }      #onetrust-pc-sdk .ot-grp-hdr1 {        display: inline-block;        width: 100%;        margin-bottom: 10px;      }      #onetrust-pc-sdk .ot-desc-cntr h4,      #onetrust-pc-sdk .ot-desc-cntr p[aria-level="4"] {        color: #263238;        display: inline-block;        vertical-align: middle;        margin: 0;        font-weight: bold;        font-size: 0.875em;        line-height: 1.3;        max-width: 80%;      }      #onetrust-pc-sdk .ot-desc-cntr p[aria-level="4"] {        max-width: 60%;      }      #onetrust-pc-sdk .ot-subgrps .ot-subgrp h5,      #onetrust-pc-sdk .ot-subgrps .ot-subgrp p[aria-level="5"] {        top: 0;        max-width: unset;      }      #onetrust-pc-sdk #ot-pvcy-hdr {        margin-bottom: 10px;      }      #onetrust-pc-sdk .ot-vlst-cntr {        overflow: hidden;      }      #onetrust-pc-sdk .category-vendors-list-handler,      #onetrust-pc-sdk .category-host-list-handler,      #onetrust-pc-sdk .category-vendors-list-handler + a {        display: block;        float: left;        color: #3860be;        font-size: 0.813em;        font-weight: 400;        line-height: 1.1;        cursor: pointer;        margin: 5px 0px;      }      #onetrust-pc-sdk .category-vendors-list-handler:hover,      #onetrust-pc-sdk .category-host-list-handler:hover,      #onetrust-pc-sdk .category-vendors-list-handler + a:hover {        text-decoration-line: underline;      }      #onetrust-pc-sdk .ot-vlst-cntr svg.ot-ext-lnk,      #onetrust-pc-sdk .ot-ven-hdr svg.ot-ext-lnk,      #onetrust-pc-sdk .ot-host-hdr svg.ot-ext-lnk,      #onetrust-pc-sdk .ot-cat-grp svg.ot-ext-lnk {        display: inline-block;        height: 13px;        width: 13px;        background-repeat: no-repeat;        margin-left: 1px;        cursor: pointer;        vertical-align: middle;      }      #onetrust-pc-sdk .ot-ven-hdr svg.ot-ext-lnk {        margin-bottom: -1px;      }      #onetrust-pc-sdk .category-host-list-handler,      #onetrust-pc-sdk .ot-vlst-cntr,      #onetrust-pc-sdk #ot-pc-desc + .category-vendors-list-handler {        margin-top: 8px;      }      #onetrust-pc-sdk .ot-grp-hdr1 + .ot-vlst-cntr {        margin-top: 0px;        margin-bottom: 10px;      }      #onetrust-pc-sdk .ot-always-active-group h3.ot-cat-header,      #onetrust-pc-sdk        .ot-always-active-group        p[aria-level="3"].ot-cat-header        .ot-subgrp.ot-always-active-group        > h4,      #onetrust-pc-sdk .ot-subgrp.ot-always-active-group > p[aria-level="4"] {        max-width: 70%;      }      #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr {        max-width: 28%;      }      #onetrust-pc-sdk .ot-grp-desc ul,      #onetrust-pc-sdk li.ot-subgrp p ul {        margin: 0px;        margin-left: 15px;        padding-bottom: 8px;      }      #onetrust-pc-sdk .ot-grp-desc ul li,      #onetrust-pc-sdk li.ot-subgrp p ul li {        font-size: inherit;        padding-top: 8px;        display: list-item;        list-style: disc;      }      #onetrust-pc-sdk ul.ot-subgrps {        margin: 0;        font-size: inherit;      }      #onetrust-pc-sdk ul.ot-subgrps li {        padding: 0;        border: none;        position: relative;      }      #onetrust-pc-sdk ul.ot-subgrps li h5,      #onetrust-pc-sdk ul.ot-subgrps li p {        font-size: 0.82em;        line-height: 1.4;      }      #onetrust-pc-sdk ul.ot-subgrps li p {        color: dimgray;        clear: both;        float: left;        margin-top: 10px;        margin-bottom: 0;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk ul.ot-subgrps li h5,      #onetrust-pc-sdk ul.ot-subgrps li p[aria-level="5"] {        color: #263238;        font-weight: bold;        margin-bottom: 0;        margin-top: 0;        float: left;        position: relative;        top: 3px;      }      #onetrust-pc-sdk li.ot-subgrp {        margin-left: 30px;        display: inline-block;        width: calc(100% - 30px);      }      #onetrust-pc-sdk .ot-subgrp-tgl {        float: right;      }      #onetrust-pc-sdk .ot-subgrp-tgl.ot-always-active-subgroup {        width: auto;      }      #onetrust-pc-sdk .ot-pc-footer-logo {        height: 30px;        width: 100%;        text-align: right;        background: #f4f4f4;        border-radius: 0 0 2px 2px;      }      #onetrust-pc-sdk .ot-pc-footer-logo a {        display: inline-block;        margin-top: 5px;        margin-right: 10px;      }      #onetrust-pc-sdk #ot-pc-title {        margin: 0px;        overflow: hidden;        position: relative;        line-height: 1.2;        max-height: 2.4em;        padding-right: 1em;        font-size: 1.37em;        text-overflow: ellipsis;        white-space: nowrap;        display: block;        max-width: 90%;      }      #onetrust-pc-sdk #ot-pc-title.ot-pc-title-shrink {        max-width: 70%;      }      #onetrust-pc-sdk #ot-pc-title-mobile {        display: none !important;      }      #onetrust-pc-sdk #ot-pc-lst {        width: 100%;        position: relative;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-hdr {        padding-top: 17px;        padding-right: 15px;        padding-bottom: 17px;        padding-left: 20px;        display: inline-block;        width: calc(100% - 35px);        vertical-align: middle;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-txt {        padding-top: 6px;        padding-right: 15px;        padding-bottom: 10px;        padding-left: 20px;      }      #onetrust-pc-sdk .ot-lst-cntr {        height: 100%;      }      #onetrust-pc-sdk #ot-pc-hdr {        padding-top: 15px;        padding-right: 30px;        padding-bottom: 15px;        padding-left: 20px;        display: inline-block;        width: calc(100% - 50px);        height: 20px;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk #ot-pc-hdr input {        height: 32px;        width: 100%;        border-radius: 50px;        font-size: 0.8em;        padding-right: 35px;        padding-left: 15px;        float: left;      }      #onetrust-pc-sdk #ot-pc-hdr input::placeholder {        color: #707070;        font-style: italic;      }      #onetrust-pc-sdk #ot-lst-cnt {        height: calc(100% - 86px);        padding-left: 30px;        padding-right: 27px;        padding-top: 20px;        margin-top: 8px;        margin-right: 3px;        margin-bottom: 4px;        margin-left: 0;        overflow-x: hidden;        overflow-y: auto;        transform: translate3d(0, 0, 0);      }      #onetrust-pc-sdk #ot-back-arw {        height: 12px;        width: 12px;      }      #onetrust-pc-sdk #ot-lst-title {        display: inline-block;        font-size: 1em;      }      #onetrust-pc-sdk #ot-lst-title h3,      #onetrust-pc-sdk #ot-lst-title p[aria-level="3"] {        color: dimgray;        font-weight: bold;        margin-left: 10px;        display: inline-block;        font-size: 1em;      }      #onetrust-pc-sdk #ot-lst-title h3 *,      #onetrust-pc-sdk #ot-lst-title p[aria-level="3"] * {        font-size: inherit;      }      #onetrust-pc-sdk .ot-lst-subhdr {        float: right;        position: relative;        bottom: 6px;      }      #onetrust-pc-sdk #ot-search-cntr {        display: inline-block;        vertical-align: middle;        position: relative;        width: 300px;      }      #onetrust-pc-sdk #ot-search-cntr svg {        position: absolute;        right: 0px;        width: 30px;        height: 30px;        font-size: 1em;        line-height: 1;        top: 2px;      }      #onetrust-pc-sdk #ot-fltr-cntr {        display: inline-block;        position: relative;        margin-left: 20px;        vertical-align: middle;        font-size: 0;      }      #onetrust-pc-sdk #ot-filter-list-header {        margin-top: 15px;        margin-bottom: 10px;        float: left;        max-width: 150px;        text-decoration: none;        color: #3860be;        font-size: 0.9em;        font-weight: bold;        background-color: rgba(0, 0, 0, 0);        border-color: rgba(0, 0, 0, 0);        padding: 1px 1px 1px 15px;        overflow: hidden;        text-overflow: ellipsis;        white-space: nowrap;      }      #onetrust-pc-sdk #filter-btn-handler {        background-color: #3860be;        border-radius: 17px;        -moz-transition: 0.1s ease;        -o-transition: 0.1s ease;        -webkit-transition: 1s ease;        transition: 0.1s ease;        width: 32px;        height: 32px;        padding: 0;        margin: 0;        position: relative;      }      #onetrust-pc-sdk #filter-btn-handler svg {        cursor: pointer;        width: 15px;        height: 15px;        position: absolute;        left: 50%;        top: 50%;        transform: translate(-50%, -50%);        padding-top: 5px;      }      #onetrust-pc-sdk #filter-btn-handler path {        fill: #fff;      }      #onetrust-pc-sdk #ot-sel-blk {        min-width: 200px;        min-height: 30px;        padding-left: 20px;      }      #onetrust-pc-sdk #ot-selall-vencntr,      #onetrust-pc-sdk #ot-selall-adtlvencntr {        float: left;        height: 100%;      }      #onetrust-pc-sdk #ot-selall-vencntr label,      #onetrust-pc-sdk #ot-selall-adtlvencntr label {        height: 100%;        padding-left: 0;      }      #onetrust-pc-sdk #ot-selall-hostcntr {        width: 21px;        height: 21px;        position: relative;        left: 20px;      }      #onetrust-pc-sdk #ot-selall-vencntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-adtlvencntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-licntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-hostcntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-gnvencntr.line-through label::after {        height: auto;        border-left: 0;        left: 9px;        top: 12px;        transform: none;        -o-transform: none;        -ms-transform: none;        -webkit-transform: none;      }      #onetrust-pc-sdk .ot-ven-name,      #onetrust-pc-sdk .ot-host-name {        color: #2c3643;        font-weight: bold;        font-size: 0.813em;        line-height: 1.2;        margin: 0;        height: auto;        text-align: left;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-ven-name *,      #onetrust-pc-sdk .ot-host-name * {        font-size: inherit;      }      #onetrust-pc-sdk .ot-host-desc {        font-size: 0.69em;        line-height: 1.4;        margin-top: 5px;        margin-bottom: 5px;        color: dimgray;      }      #onetrust-pc-sdk .ot-host-name > a {        text-decoration: underline;        position: relative;        z-index: 2;        margin-bottom: 5px;        font-weight: bold;      }      #onetrust-pc-sdk .ot-host-hdr {        float: left;        width: calc(100% - 50px);        pointer-events: none;        position: relative;        z-index: 1;      }      #onetrust-pc-sdk .ot-host-hdr .ot-host-name {        pointer-events: none;      }      #onetrust-pc-sdk .ot-host-hdr a {        pointer-events: initial;      }      #onetrust-pc-sdk .ot-host-hdr .ot-host-name ~ a {        margin-top: 5px;        font-size: 0.813em;        text-decoration: underline;      }      #onetrust-pc-sdk .ot-ven-hdr {        width: 88%;        float: right;      }      #onetrust-pc-sdk input:focus + .ot-acc-hdr {        outline: #000 solid 1px !important;      }      #onetrust-pc-sdk #ot-selall-hostcntr input[type="checkbox"],      #onetrust-pc-sdk #ot-selall-vencntr input[type="checkbox"],      #onetrust-pc-sdk #ot-selall-adtlvencntr input[type="checkbox"] {        position: absolute;      }      #onetrust-pc-sdk .ot-host-item .ot-chkbox {        float: left;      }      #onetrust-pc-sdk.ot-addtl-vendors        #ot-lst-cnt:not(.ot-host-cnt)        .ot-sel-all-hdr {        right: 38px;      }      #onetrust-pc-sdk.ot-addtl-vendors        #ot-lst-cnt:not(.ot-host-cnt)        #ot-sel-blk {        background-color: #f9f9fc;        border: 1px solid #e2e2e2;        width: auto;        padding-bottom: 5px;        padding-top: 5px;      }      #onetrust-pc-sdk.ot-addtl-vendors        #ot-lst-cnt:not(.ot-host-cnt)        .ot-sel-all-chkbox {        right: 2px;        width: auto;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr {        position: relative;        border-left: 1px solid #e2e2e2;        border-right: 1px solid #e2e2e2;        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr input {        z-index: 1;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr > .ot-acc-hdr {        background: #f9f9fc;        padding-top: 10px;        padding-bottom: 10px;        background-color: #f9f9fc;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr > .ot-acc-hdr input {        z-index: 2;      }      #onetrust-pc-sdk        #ot-pc-lst        .ot-acc-cntr        > input[type="checkbox"]:checked        ~ .ot-acc-hdr {        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk        #ot-pc-lst        .ot-acc-cntr        > input[type="checkbox"][aria-checked="mixed"]        ~ .ot-acc-hdr {        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr .ot-addtl-venbox {        display: none;      }      #onetrust-pc-sdk #ot-addtl-venlst .ot-tgl-cntr {        margin-right: 13px;      }      #onetrust-pc-sdk .ot-vensec-title {        font-size: 0.813em;        display: inline-block;      }      #onetrust-pc-sdk .ot-ven-item > button:focus,      #onetrust-pc-sdk .ot-host-item > button:focus,      #onetrust-pc-sdk .ot-acc-cntr > button:focus {        outline: #000 solid 2px;      }      #onetrust-pc-sdk .ot-ven-item > button,      #onetrust-pc-sdk .ot-host-item > button,      #onetrust-pc-sdk .ot-acc-cntr > button {        position: absolute;        cursor: pointer;        width: 100%;        height: 100%;        border: 0;        opacity: 0;        margin: 0;        top: 0;        left: 0;      }      #onetrust-pc-sdk .ot-ven-item > button ~ .ot-acc-hdr,      #onetrust-pc-sdk .ot-host-item > button ~ .ot-acc-hdr,      #onetrust-pc-sdk .ot-acc-cntr > button ~ .ot-acc-hdr {        cursor: pointer;      }      #onetrust-pc-sdk        .ot-ven-item        > button[aria-expanded="false"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-host-item        > button[aria-expanded="false"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-acc-cntr        > button[aria-expanded="false"]        ~ .ot-acc-txt {        margin-top: 0;        max-height: 0;        opacity: 0;        overflow: hidden;        width: 100%;        transition: 0.25s ease-out;        display: none;      }      #onetrust-pc-sdk        .ot-ven-item        > button[aria-expanded="true"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-host-item        > button[aria-expanded="true"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-acc-cntr        > button[aria-expanded="true"]        ~ .ot-acc-txt {        transition: 0.1s ease-in;        display: block;      }      #onetrust-pc-sdk .ot-ven-item ul {        list-style: none inside;        font-size: 100%;        margin: 0;      }      #onetrust-pc-sdk .ot-ven-item ul li {        margin: 0 !important;        padding: 0;        border: none !important;      }      #onetrust-pc-sdk .ot-hide-acc > button {        pointer-events: none;      }      #onetrust-pc-sdk .ot-hide-acc .ot-arw-cntr > * {        visibility: hidden;      }      #onetrust-pc-sdk #ot-ven-lst,      #onetrust-pc-sdk #ot-host-lst,      #onetrust-pc-sdk #ot-addtl-venlst,      #onetrust-pc-sdk #ot-gn-venlst {        width: 100%;      }      #onetrust-pc-sdk #ot-ven-lst li,      #onetrust-pc-sdk #ot-host-lst li,      #onetrust-pc-sdk #ot-addtl-venlst li,      #onetrust-pc-sdk #ot-gn-venlst li {        border: 1px solid #d7d7d7;        border-radius: 2px;        position: relative;        margin-top: 10px;      }      #onetrust-pc-sdk #ot-gn-venlst li.ot-host-info {        padding: 0.5rem;        overflow-y: hidden;      }      #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {        width: 65%;      }      #onetrust-pc-sdk #ot-host-lst .ot-tgl-cntr {        width: 65%;        float: left;      }      #onetrust-pc-sdk label {        margin-bottom: 0;      }      #onetrust-pc-sdk .ot-host-notice {        float: right;      }      #onetrust-pc-sdk .ot-ven-link,      #onetrust-pc-sdk .ot-ven-legclaim-link,      #onetrust-pc-sdk .ot-host-expand {        color: dimgray;        font-size: 0.75em;        line-height: 0.9;        display: inline-block;      }      #onetrust-pc-sdk .ot-ven-link *,      #onetrust-pc-sdk .ot-ven-legclaim-link *,      #onetrust-pc-sdk .ot-host-expand * {        font-size: inherit;      }      #onetrust-pc-sdk .ot-ven-link,      #onetrust-pc-sdk .ot-ven-legclaim-link {        position: relative;        z-index: 2;      }      #onetrust-pc-sdk .ot-ven-link:hover,      #onetrust-pc-sdk .ot-ven-legclaim-link:hover {        text-decoration: underline;      }      #onetrust-pc-sdk .ot-ven-dets {        border-radius: 2px;        background-color: #f8f8f8;      }      #onetrust-pc-sdk .ot-ven-dets li:first-child p:first-child {        border-top: none;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:not(:first-child) {        border-top: 1px solid #ddd !important;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n + 3) p {        display: inline-block;      }      #onetrust-pc-sdk        .ot-ven-dets        .ot-ven-disc:nth-child(n + 3)        p:nth-of-type(odd) {        width: 30%;      }      #onetrust-pc-sdk        .ot-ven-dets        .ot-ven-disc:nth-child(n + 3)        p:nth-of-type(even) {        width: 50%;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p,      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h5 {        padding-top: 5px;        padding-bottom: 5px;        display: block;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h5,      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p[aria-level="5"] {        display: inline-block;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p:nth-last-child(-n + 1) {        padding-bottom: 10px;      }      #onetrust-pc-sdk        .ot-ven-dets        .ot-ven-disc        p:nth-child(-n + 2):not(.disc-pur):not([role="heading"]) {        padding-top: 10px;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur-cont {        display: inline;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur {        position: relative;        width: 50% !important;        word-break: break-word;        word-wrap: break-word;        left: calc(30% + 17px);      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur:nth-child(-n + 1) {        position: static;      }      #onetrust-pc-sdk .ot-ven-dets p,      #onetrust-pc-sdk .ot-ven-dets h5,      #onetrust-pc-sdk .ot-ven-dets span {        font-size: 0.69em;        text-align: left;        vertical-align: middle;        word-break: break-word;        word-wrap: break-word;        margin: 0;        padding-bottom: 10px;        padding-left: 15px;        color: #2e3644;      }      #onetrust-pc-sdk .ot-ven-dets h5,      #onetrust-pc-sdk .ot-ven-dets p[aria-level="5"] {        padding-top: 5px;        line-height: 1.5;      }      #onetrust-pc-sdk .ot-ven-dets span {        color: dimgray;        padding: 0;        vertical-align: baseline;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-pur h5,      #onetrust-pc-sdk .ot-ven-dets .ot-ven-pur p[aria-level="5"] {        border-top: 1px solid #e9e9e9;        border-bottom: 1px solid #e9e9e9;        padding-bottom: 5px;        margin-bottom: 5px;        font-weight: bold;      }      #onetrust-pc-sdk .ot-host-opt {        display: inline-block;        width: 100%;        margin: 0;        font-size: inherit;      }      #onetrust-pc-sdk .ot-host-opt li > dl {        font-size: 0.81em;        padding: 5px 0;        margin: 5px 0;        display: flex;      }      #onetrust-pc-sdk .ot-host-opt li > dl dt {        width: 30%;        float: left;      }      #onetrust-pc-sdk .ot-host-opt li > dl dd {        width: 70%;        float: left;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk #ot-host-lst li.ot-host-info {        border: none;        font-size: 0.8em;        color: dimgray;        float: left;        text-align: left;        padding: 10px;        margin-bottom: 10px;        width: calc(100% - 10px);        background-color: #f8f8f8;      }      #onetrust-pc-sdk #ot-host-lst li.ot-host-info a {        color: dimgray;      }      #onetrust-pc-sdk #ot-host-lst li.ot-host-info > div {        overflow: auto;      }      #onetrust-pc-sdk #no-results {        text-align: center;        margin-top: 30px;      }      #onetrust-pc-sdk #no-results p {        font-size: 1em;        color: #2e3644;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk #no-results p span {        font-weight: bold;      }      #onetrust-pc-sdk .ot-tgl-cntr {        display: inline-block;        vertical-align: middle;      }      #onetrust-pc-sdk .ot-arw-cntr,      #onetrust-pc-sdk .ot-tgl-cntr {        float: right;      }      #onetrust-pc-sdk .ot-desc-cntr {        padding-top: 0px;        margin-top: 20px;        padding-right: 0px;        border-radius: 3px;        overflow: hidden;        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-desc-cntr:focus,      #onetrust-pc-sdk .ot-desc-cntr:active,      #onetrust-pc-sdk .ot-desc-cntr:focus-visible {        outline: 2px solid #101010;        border-radius: 2px;      }      #onetrust-pc-sdk .ot-leg-border-color {        border: 1px solid #e9e9e9;      }      #onetrust-pc-sdk .ot-leg-border-color .ot-subgrp-cntr {        border-top: 1px solid #e9e9e9;        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-category-desc {        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-grp-hdr1 {        padding-left: 10px;        width: calc(100% - 20px);        padding-top: 10px;        margin-bottom: 0px;        padding-bottom: 8px;      }      #onetrust-pc-sdk .ot-subgrp-cntr {        padding-top: 10px;      }      #onetrust-pc-sdk .ot-desc-cntr > *:not(.ot-grp-hdr1) {        padding-left: 10px;        padding-right: 10px;      }      #onetrust-pc-sdk .ot-pli-hdr {        overflow: hidden;        padding-top: 7.5px;        padding-bottom: 7.5px;        background-color: #f8f8f8;        border: none;        border-bottom: 1px solid #e9e9e9;      }      #onetrust-pc-sdk .ot-pli-hdr span:first-child {        text-align: left;        max-width: 80px;        padding-right: 5px;      }      #onetrust-pc-sdk .ot-pli-hdr span:last-child {        padding-right: 20px;        text-align: center;      }      #onetrust-pc-sdk .ot-li-title {        float: right;        font-size: 0.813em;      }      #onetrust-pc-sdk .ot-desc-cntr .ot-tgl-cntr:first-of-type,      #onetrust-pc-sdk .ot-cat-header + .ot-tgl {        padding-left: 7px;        padding-right: 7px;      }      #onetrust-pc-sdk        .ot-always-active-group        .ot-grp-hdr1        .ot-tgl-cntr:first-of-type {        padding-left: 0px;      }      #onetrust-pc-sdk .ot-cat-header,      #onetrust-pc-sdk .ot-subgrp h4,      #onetrust-pc-sdk .ot-subgrp p[aria-level="4"] {        max-width: calc(100% - 133px);      }      #onetrust-pc-sdk #ot-lst-cnt #ot-sel-blk {        width: 100%;        display: inline-block;        padding: 0;      }      #onetrust-pc-sdk .ot-sel-all {        display: inline-block;        width: 100%;      }      #onetrust-pc-sdk .ot-sel-all-hdr,      #onetrust-pc-sdk .ot-sel-all-chkbox {        width: 100%;        float: right;        position: relative;      }      #onetrust-pc-sdk .ot-sel-all-chkbox {        z-index: 1;      }      #onetrust-pc-sdk :not(.ot-hosts-ui) .ot-sel-all-hdr,      #onetrust-pc-sdk :not(.ot-hosts-ui) .ot-sel-all-chkbox {        right: 23px;        width: calc(100% - 23px);      }      #onetrust-pc-sdk .ot-consent-hdr,      #onetrust-pc-sdk .ot-li-hdr {        float: right;        font-size: 0.813em;        position: relative;        line-height: normal;        text-align: center;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-hosts-ui .ot-consent-hdr {        float: left;        position: relative;        left: 5px;      }      #onetrust-pc-sdk .ot-li-hdr {        max-width: 100px;        margin-right: 10px;      }      #onetrust-pc-sdk .ot-consent-hdr {        max-width: 55px;      }      #onetrust-pc-sdk .ot-ven-ctgl {        margin-left: 10px;      }      #onetrust-pc-sdk .ot-ven-litgl {        margin-right: 55px;      }      #onetrust-pc-sdk .ot-ven-litgl.ot-ven-litgl-only {        margin-right: 86px;      }      #onetrust-pc-sdk .ot-ven-ctgl,      #onetrust-pc-sdk .ot-ven-litgl,      #onetrust-pc-sdk .ot-ven-gvctgl {        float: left;      }      #onetrust-pc-sdk .ot-ven-ctgl label,      #onetrust-pc-sdk .ot-ven-litgl label,      #onetrust-pc-sdk .ot-ven-gvctgl label {        width: 22px;        padding: 0;      }      #onetrust-pc-sdk #ot-selall-licntr {        display: block;        width: 21px;        height: 21px;        position: relative;        float: right;        right: 80px;      }      #onetrust-pc-sdk #ot-selall-licntr input {        position: absolute;      }      #onetrust-pc-sdk #ot-selall-vencntr,      #onetrust-pc-sdk #ot-selall-adtlvencntr,      #onetrust-pc-sdk #ot-selall-gnvencntr {        float: right;        width: 21px;        height: 21px;        position: relative;        right: 15px;      }      #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {        float: right;        width: auto;      }      #onetrust-pc-sdk .ot-ven-hdr {        float: left;        width: 60%;      }      #onetrust-pc-sdk #vdr-lst-dsc {        font-size: 0.812em;        line-height: 1.5;        padding: 10px 15px 5px 15px;      }      #onetrust-pc-sdk #ot-anchor {        border: 12px solid rgba(0, 0, 0, 0);        display: none;        position: absolute;        z-index: 2147483647;        top: 40px;        right: 35px;        transform: rotate(45deg);        -o-transform: rotate(45deg);        -ms-transform: rotate(45deg);        -webkit-transform: rotate(45deg);        background-color: #fff;        -webkit-box-shadow: -3px -3px 5px -2px #c7c5c7;        -moz-box-shadow: -3px -3px 5px -2px #c7c5c7;        box-shadow: -3px -3px 5px -2px #c7c5c7;      }      #onetrust-pc-sdk #ot-fltr-modal {        width: 300px;        position: absolute;        z-index: 2147483646;        top: 46px;        height: 90%;        max-height: 350px;        display: none;        -moz-transition: 0.2s ease;        -o-transition: 0.2s ease;        -webkit-transition: 2s ease;        transition: 0.2s ease;        opacity: 1;        right: 0;      }      #onetrust-pc-sdk #ot-fltr-modal button {        max-width: 200px;        line-height: 1;        word-break: break-word;        white-space: normal;        height: auto;        font-weight: bold;      }      #onetrust-pc-sdk #ot-fltr-cnt {        background-color: #fff;        margin: 5px;        border-radius: 3px;        height: 100%;        margin-right: 10px;        padding-right: 10px;        -webkit-box-shadow: 0px 0px 12px 2px #c7c5c7;        -moz-box-shadow: 0px 0px 12px 2px #c7c5c7;        box-shadow: 0px 0px 12px 2px #c7c5c7;      }      #onetrust-pc-sdk .ot-fltr-scrlcnt {        overflow-y: auto;        overflow-x: hidden;        clear: both;        max-height: calc(100% - 60px);      }      #onetrust-pc-sdk .ot-fltr-opt {        margin-bottom: 5px;        margin-left: 15px;        min-height: 20px;        clear: both;      }      #onetrust-pc-sdk .ot-fltr-opt .ot-chkbox {        float: none;      }      #onetrust-pc-sdk .ot-fltr-opt span {        cursor: pointer;        color: dimgray;        font-size: 0.8em;        line-height: 1.1;        font-weight: normal;      }      #onetrust-pc-sdk #clear-filters-handler {        float: right;        margin-top: 15px;        margin-bottom: 10px;        text-decoration: none;        color: #3860be;        font-size: 0.9em;        border: none;        padding: 1px;      }      #onetrust-pc-sdk #clear-filters-handler:hover {        color: #1883fd;      }      #onetrust-pc-sdk #clear-filters-handler:focus {        outline: #000 solid 1px;      }      #onetrust-pc-sdk #filter-apply-handler {        margin-right: 10px;      }      #onetrust-pc-sdk .ot-grp-desc + .ot-leg-btn-container {        margin-top: 0;      }      #onetrust-pc-sdk .ot-leg-btn-container {        display: inline-block;        width: 100%;        margin-top: 10px;      }      #onetrust-pc-sdk .ot-leg-btn-container button {        height: auto;        padding: 6.5px 8px;        margin-bottom: 0;        line-height: normal;        letter-spacing: 0;      }      #onetrust-pc-sdk .ot-leg-btn-container svg {        display: none;        height: 14px;        width: 14px;        padding-right: 5px;        vertical-align: sub;      }      #onetrust-pc-sdk .ot-active-leg-btn {        cursor: default;        pointer-events: none;      }      #onetrust-pc-sdk .ot-active-leg-btn svg {        display: inline-block;      }      #onetrust-pc-sdk .ot-remove-objection-handler {        border: none;        text-decoration: underline;        padding: 0;        font-size: 0.82em;        font-weight: 600;        line-height: 1.4;        padding-left: 10px;      }      #onetrust-pc-sdk .ot-obj-leg-btn-handler span {        font-weight: bold;        text-align: center;        font-size: 0.91em;        line-height: 1.5;      }      #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {        border: none;        height: auto;        line-height: 1.5;        text-decoration: underline;        font-size: 0.69em;        background: none;        width: auto;      }      #onetrust-pc-sdk.ot-close-btn-link .ot-close-cntr {        right: 5px;        top: 5px;        transform: none;      }      #onetrust-pc-sdk .ot-grps-cntr {        overflow-y: hidden;      }      #onetrust-pc-sdk .ot-cat-header {        float: left;        font-weight: 600;        font-size: 0.875em;        line-height: 1.5;        max-width: 90%;        vertical-align: middle;      }      #onetrust-pc-sdk .ot-vnd-item > button:focus {        outline: #000 solid 2px;      }      #onetrust-pc-sdk .ot-vnd-item > button {        position: absolute;        cursor: pointer;        width: 100%;        height: 100%;        margin: 0;        top: 0;        left: 0;        z-index: 1;        max-width: none;        border: none;      }      #onetrust-pc-sdk        .ot-vnd-item        > button[aria-expanded="false"]        ~ .ot-acc-txt {        margin-top: 0;        max-height: 0;        opacity: 0;        overflow: hidden;        width: 100%;        transition: 0.25s ease-out;        display: none;      }      #onetrust-pc-sdk        .ot-vnd-item        > button[aria-expanded="true"]        ~ .ot-acc-txt {        transition: 0.1s ease-in;        margin-top: 10px;        width: 100%;        overflow: auto;        display: block;      }      #onetrust-pc-sdk        .ot-vnd-item        > button[aria-expanded="true"]        ~ .ot-acc-grpcntr {        width: auto;        margin-top: 0px;        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item {        position: relative;        border-radius: 2px;        margin: 0;        padding: 0;        border: 1px solid #d8d8d8;        border-top: none;        width: calc(100% - 2px);        float: left;      }      #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type {        margin-top: 10px;        border-top: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:first-child {        margin-top: 10px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:last-child,      #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr:last-child {        margin-bottom: 5px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {        padding-top: 11.5px;        padding-bottom: 11.5px;        padding-left: 20px;        padding-right: 20px;        width: calc(100% - 40px);        display: inline-block;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt {        width: 100%;        padding: 0;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr {        padding-left: 20px;        padding-right: 15px;        padding-bottom: 0;        width: calc(100% - 35px);      }      #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp {        padding-right: 5px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr {        z-index: 1;        position: relative;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header + .ot-arw-cntr {        position: absolute;        top: 50%;        transform: translateY(-50%);        right: 20px;        margin-top: -2px;      }      #onetrust-pc-sdk        .ot-accordion-layout        .ot-cat-header        + .ot-arw-cntr        .ot-arw {        width: 15px;        height: 20px;        margin-left: 5px;        color: dimgray;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header {        float: none;        color: #2e3644;        margin: 0;        display: inline-block;        height: auto;        word-wrap: break-word;        min-height: inherit;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,      #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr {        padding-left: 20px;        width: calc(100% - 20px);        display: inline-block;        margin-top: 0;        padding-bottom: 2px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {        position: relative;        min-height: 25px;      }      #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl,      #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-always-active {        position: absolute;        top: 50%;        transform: translateY(-50%);        right: 20px;      }      #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl + .ot-tgl {        right: 95px;      }      #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler,      #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler + a {        margin-top: 5px;      }      #onetrust-pc-sdk #ot-pc-lst {        display: flex;        flex-direction: column;      }      #onetrust-pc-sdk #ot-lst-cnt {        margin-top: 1rem;        max-height: calc(100% - 100px);      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info-cntr {        border: 1px solid #d8d8d8;        padding: 0.75rem 2rem;        padding-bottom: 0;        width: auto;        margin-top: 0.5rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info {        margin-bottom: 1rem;        padding-left: 0.75rem;        padding-right: 0.75rem;        display: flex;        flex-direction: column;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info > div {        display: flex;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*="DPOEmail"] {        border-top: 1px solid #d8d8d8;        padding-top: 1rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*="DPOLink"] {        border-bottom: 1px solid #d8d8d8;        padding-bottom: 1rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-lbl {        font-weight: bold;        font-size: 0.85em;        margin-bottom: 0.5rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-cnt {        margin-left: 0.5rem;        font-weight: 500;        font-size: 0.85rem;      }      #onetrust-pc-sdk .ot-vs-list,      #onetrust-pc-sdk .ot-vnd-serv {        width: auto;        padding: 1rem 1.25rem;        padding-bottom: 0;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr {        padding-bottom: 0.75rem;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr {        font-weight: 600;        font-size: 0.95em;        line-height: 2;        margin-left: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item {        border: none;        margin: 0;        padding: 0;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button {        outline: none;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button[aria-expanded="true"],      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button[aria-expanded="true"] {        border-bottom: none;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:first-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:first-child {        margin-top: 0.25rem;        border-top: unset;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child {        margin-bottom: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child button,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child button {        border-bottom: none;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info-cntr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info-cntr {        border: 1px solid #d8d8d8;        padding: 0.75rem 1.75rem;        padding-bottom: 0;        width: auto;        margin-top: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info {        margin-bottom: 1rem;        padding-left: 0.75rem;        padding-right: 0.75rem;        display: flex;        flex-direction: column;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info > div,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info > div {        display: flex;      }      #onetrust-pc-sdk        .ot-vs-list        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOEmail"],      #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOEmail"] {        border-top: 1px solid #d8d8d8;        padding-top: 1rem;      }      #onetrust-pc-sdk        .ot-vs-list        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOLink"],      #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOLink"] {        border-bottom: 1px solid #d8d8d8;        padding-bottom: 1rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-lbl,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-lbl {        font-weight: bold;        font-size: 0.85em;        margin-bottom: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-cnt,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-cnt {        margin-left: 0.5rem;        font-weight: 500;        font-size: 0.85rem;      }      #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt,      #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt {        padding-left: 40px;      }      #onetrust-pc-sdk        .ot-vs-list.ot-vnd-subgrp-cnt        .ot-vnd-serv-hdr-cntr        .ot-vnd-serv-hdr,      #onetrust-pc-sdk        .ot-vnd-serv.ot-vnd-subgrp-cnt        .ot-vnd-serv-hdr-cntr        .ot-vnd-serv-hdr {        font-size: 0.8em;      }      #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt .ot-cat-header,      #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt .ot-cat-header {        font-size: 0.8em;      }      #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv {        margin-bottom: 1rem;        padding: 1rem 0.95rem;      }      #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv .ot-vnd-serv-hdr-cntr {        padding-bottom: 0.75rem;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk        .ot-subgrp-cntr        .ot-vnd-serv        .ot-vnd-serv-hdr-cntr        .ot-vnd-serv-hdr {        font-weight: 700;        font-size: 0.8em;        line-height: 20px;        margin-left: 0.82rem;      }      #onetrust-pc-sdk .ot-subgrp-cntr .ot-cat-header {        font-weight: 700;        font-size: 0.8em;        line-height: 20px;      }      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-vnd-serv        .ot-vnd-lst-cont        .ot-accordion-layout        .ot-acc-hdr        div.ot-chkbox {        margin-left: 0.82rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr,      #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr,      #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr {        padding: 0.7rem 0;        margin: 0;        display: flex;        width: 100%;        align-items: center;        justify-content: space-between;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:first-child,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr div:first-child,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        div:first-child,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:first-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:first-child,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        div:first-child,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        div:first-child {        margin-left: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:last-child,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr div:last-child,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr div:last-child,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:last-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:last-child,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        div:last-child,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        div:last-child {        margin-right: 0.5rem;        margin-left: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-always-active,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-always-active,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-always-active {        position: relative;        right: unset;        top: unset;        transform: unset;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-arw-cntr,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-arw-cntr {        float: none;        top: unset;        right: unset;        transform: unset;        margin-top: -2px;        position: relative;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-cat-header,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-cat-header {        flex: 1;        margin: 0 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-tgl {        position: relative;        transform: none;        right: 0;        top: 0;        float: none;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox {        position: relative;        margin: 0 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-chkbox        label,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox        label {        padding: 0;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label::before,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox label::before,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox        label::before {        position: relative;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-chkbox        input,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        input,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox        input {        position: absolute;        cursor: pointer;        width: 100%;        height: 100%;        opacity: 0;        margin: 0;        top: 0;        left: 0;        z-index: 1;      }      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        h5.ot-cat-header,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        h4.ot-cat-header,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        p[aria-level="5"].ot-cat-header,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        p[aria-level="4"].ot-cat-header {        margin: 0;      }      #onetrust-pc-sdk        .ot-vs-config        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        h5,      #onetrust-pc-sdk        .ot-vs-config        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        p[aria-level="5"] {        top: 0;        line-height: 20px;      }      #onetrust-pc-sdk .ot-vs-list {        display: flex;        flex-direction: column;        padding: 0;        margin: 0.5rem 4px;      }      #onetrust-pc-sdk .ot-vs-selc-all {        display: flex;        padding: 0;        float: unset;        align-items: center;        justify-content: flex-start;      }      #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf {        justify-content: flex-end;      }      #onetrust-pc-sdk        .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf        .ot-sel-all-chkbox {        margin-right: 48px;      }      #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf .ot-sel-all-chkbox {        margin: 0;        padding: 0;        margin-right: 14px;        justify-content: flex-end;      }      #onetrust-pc-sdk        .ot-vs-selc-all.ot-toggle-conf        #ot-selall-vencntr.ot-chkbox,      #onetrust-pc-sdk        .ot-vs-selc-all.ot-toggle-conf        #ot-selall-vencntr.ot-tgl {        display: inline-block;        right: unset;        width: auto;        height: auto;        float: none;      }      #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr label {        width: 45px;        height: 25px;      }      #onetrust-pc-sdk .ot-vs-selc-all .ot-sel-all-chkbox {        margin-right: 11px;        margin-left: 0.75rem;        display: flex;        align-items: center;      }      #onetrust-pc-sdk .ot-vs-selc-all .sel-all-hdr {        margin: 0 1.25rem;        font-size: 0.812em;        line-height: normal;        text-align: center;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-vnd-list-cnt #ot-selall-vencntr.ot-chkbox {        float: unset;        right: 0;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf        .ot-sel-all-chkbox {        margin-right: 50px;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all.ot-toggle-conf        #ot-selall-vencntr        label {        width: 35px;        height: 10px;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all.ot-toggle-conf        .ot-sel-all-chkbox {        justify-content: flex-end;      }      #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox {        right: unset;        display: flex;        align-items: center;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all        .ot-sel-all-chkbox        #ot-selall-vencntr.ot-chkbox {        right: unset;      }      #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox {        margin-left: 12px;      }      #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox .sel-all-hdr {        margin: 0 1rem;      }      #onetrust-pc-sdk .ot-pgph-link {        font-size: 0.813em;        margin-top: 5px;        position: relative;      }      #onetrust-pc-sdk .ot-pgph-link.ot-pgph-link-subgroup {        margin-bottom: 1rem;      }      #onetrust-pc-sdk .ot-pgph-contr {        margin: 0 2.5rem;      }      #onetrust-pc-sdk .ot-pgph-title {        font-size: 1.18rem;        margin-bottom: 2rem;      }      #onetrust-pc-sdk .ot-pgph-desc {        font-size: 1rem;        font-weight: 400;        margin-bottom: 2rem;        line-height: 1.5rem;      }      #onetrust-pc-sdk .ot-pgph-desc:not(:last-child):after {        content: "";        width: 96%;        display: block;        margin: 0 auto;        padding-bottom: 2rem;        border-bottom: 1px solid #e9e9e9;      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] input ~ .ot-acc-hdr .ot-arw,      #onetrust-pc-sdk.otPcTab[dir="rtl"] #ot-back-arw {        transform: rotate(180deg);        -o-transform: rotate(180deg);        -ms-transform: rotate(180deg);        -webkit-transform: rotate(180deg);      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] input:checked ~ .ot-acc-hdr .ot-arw {        transform: rotate(270deg);        -o-transform: rotate(270deg);        -ms-transform: rotate(270deg);        -webkit-transform: rotate(270deg);      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] #ot-search-cntr svg {        right: 15px;      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] .ot-chkbox label::after {        transform: rotate(45deg);        -webkit-transform: rotate(45deg);        -o-transform: rotate(45deg);        -ms-transform: rotate(45deg);        border-left: 0;        border-right: 3px solid;      }      #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {        padding: 0;        background-color: rgba(0, 0, 0, 0);        border: none;        margin: 0;      }      @media (max-width: 767px) {        #onetrust-pc-sdk {          width: 100%;          border: none;        }        #onetrust-pc-sdk .ot-optout-signal {          margin: 0.625rem;        }        #onetrust-pc-sdk .ot-sdk-container,        #onetrust-pc-sdk .ot-sdk-container {          padding: 0;          margin: 0;        }        #onetrust-pc-sdk .ot-title-cntr {          width: 75%;        }        #onetrust-pc-sdk .ot-title-cntr #ot-pc-title {          white-space: break-spaces;          font-size: 20px;          overflow-x: visible;          margin-left: 10px;        }        #onetrust-pc-sdk .ot-pc-logo {          width: 15%;        }        #onetrust-pc-sdk .ot-pc-logo img {          max-height: 100%;          font-size: 10px;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin: 0;          padding-top: 20px;          padding-right: 20px;          padding-bottom: 15px;          padding-left: 20px;          position: relative;          left: auto;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin-top: 20px;          margin-left: 20px;          padding: 0;          padding-bottom: 10px;        }        #onetrust-pc-sdk .ot-grps-cntr {          max-height: none;          overflow: hidden;        }        #onetrust-pc-sdk #accept-recommended-btn-handler {          float: none;        }      }      @media (min-width: 768px) {        #onetrust-pc-sdk.ot-tgl-with-label .ot-label-status {          display: inline;        }        #onetrust-pc-sdk.ot-tgl-with-label #ot-pc-lst .ot-label-status {          display: none;        }        #onetrust-pc-sdk.ot-tgl-with-label.ot-leg-opt-out .ot-pli-hdr {          padding-right: 8%;        }        #onetrust-pc-sdk.ot-tgl-with-label .ot-cat-header {          max-width: 60%;        }        #onetrust-pc-sdk.ot-tgl-with-label .ot-subgrp h4,        #onetrust-pc-sdk.ot-tgl-with-label .ot-subgrp p[aria-level="4"] {          max-width: 58%;        }        #onetrust-pc-sdk.ot-tgl-with-label          .ot-subgrp-cntr          ul.ot-subgrps          li.ot-subgrp          > h6,        #onetrust-pc-sdk.ot-tgl-with-label          .ot-subgrp-cntr          ul.ot-subgrps          li.ot-subgrp          > p[aria-level="6"] {          max-width: 50%;        }        #onetrust-pc-sdk.ot-tgl-with-label          .ot-desc-cntr          .ot-tgl-cntr:first-of-type,        #onetrust-pc-sdk.ot-tgl-with-label .ot-cat-header + .ot-tgl {          padding-left: 15px;        }        #onetrust-pc-sdk.ot-tgl-with-label .ot-vnd-serv .ot-label-status,        #onetrust-pc-sdk.ot-tgl-with-label .ot-grp-hdr1 .ot-label-status {          display: none;        }      }      @media (max-width: 640px) {        #onetrust-pc-sdk {          height: 100%;        }        #onetrust-pc-sdk .ot-optout-signal {          margin: 0.625rem;        }        #onetrust-pc-sdk .ot-pc-header {          padding: 10px;          width: calc(100% - 20px);        }        #onetrust-pc-sdk #ot-pc-content {          overflow: auto;        }        #onetrust-pc-sdk .ot-sdk-row .ot-sdk-columns {          width: 100%;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin: 0;          overflow: hidden;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin-left: 10px;          width: calc(100% - 15px);          margin-top: 5px;          margin-bottom: 5px;        }        #onetrust-pc-sdk .ot-ven-hdr {          max-width: 80%;        }        #onetrust-pc-sdk #ot-lst-cnt {          width: calc(100% - 18px);          padding-top: 13px;          padding-right: 5px;          padding-left: 10px;        }        #onetrust-pc-sdk .ot-grps-cntr {          width: 100%;        }        #onetrust-pc-sdk .ot-pc-footer {          max-height: 210px;        }        #onetrust-pc-sdk #ot-pc-content,        #onetrust-pc-sdk #ot-pc-lst {          height: calc(100% - 322px);        }        #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {          position: fixed;          top: 10px;          right: 15px;        }        #onetrust-pc-sdk.ot-close-btn-link .ot-pc-header {          padding-top: 25px;        }        #onetrust-pc-sdk.ot-close-btn-link #ot-pc-title {          max-width: 100%;        }        #onetrust-pc-sdk          .ot-btn-container.ot-button-order-container          *[class*="ot-button-order-"]:nth-of-type(1) {          margin-right: 15px;        }        #onetrust-pc-sdk #ot-pc-title-mobile {          display: block !important;          line-height: 1.5;          margin-bottom: 10px;          margin-top: 10px;          width: 100%;          padding-left: 12px;        }        #onetrust-pc-sdk #ot-pc-title {          display: none !important;        }        #onetrust-pc-sdk .ot-pc-logo {          width: 180px !important;        }        #onetrust-pc-sdk .ot-title-cntr {          float: right;          width: auto !important;        }        #onetrust-pc-sdk .ot-close-cntr {          transform: translateY(0%);        }      }      @media (max-width: 640px) and (orientation: portrait) {        #onetrust-pc-sdk #ot-pc-hdr {          height: 70px;          padding: 15px 0;          width: 100%;        }        #onetrust-pc-sdk .ot-lst-subhdr {          width: calc(100% - 15px);          float: none;          bottom: auto;          display: inline-block;          padding-top: 8px;          padding-left: 15px;        }        #onetrust-pc-sdk .ot-btn-subcntr {          float: none;        }        #onetrust-pc-sdk #ot-search-cntr {          display: inline-block;          width: calc(100% - 55px);          position: relative;        }        #onetrust-pc-sdk #ot-anchor {          top: 75px;          right: 30px;        }        #onetrust-pc-sdk #ot-fltr-modal {          top: 81px;        }        #onetrust-pc-sdk #ot-fltr-cntr {          float: right;          right: 15px;        }        #onetrust-pc-sdk #ot-lst-title {          padding-left: 15px;        }        #onetrust-pc-sdk #ot-lst-cnt {          height: auto;          overflow: auto;        }        #onetrust-pc-sdk .save-preference-btn-handler,        #onetrust-pc-sdk #accept-recommended-btn-handler,        #onetrust-pc-sdk .ot-pc-refuse-all-handler {          width: calc(100% - 33px) !important;        }        #onetrust-pc-sdk.ot-ftr-stacked .save-preference-btn-handler,        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr {          max-width: none;        }        #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button {          margin: 15px;        }        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button {          min-width: none;          max-width: none;        }        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button:nth-child(2) {          margin-top: 15px;        }        #onetrust-pc-sdk.ot-ftr-stacked          .ot-btn-container          button:not(:last-child) {          margin-bottom: 0;        }      }      @media (max-width: 425px) {        #onetrust-pc-sdk .ot-pc-header .ot-pc-logo {          width: 150px img;          width-max-height: 100%;          width-font-size: 10px;        }        #onetrust-pc-sdk .ot-title-cntr {          width: 75%;        }        #onetrust-pc-sdk #ot-pc-lst .ot-acc-txt {          padding-top: 6px;          padding-bottom: 10px;        }        #onetrust-pc-sdk #ot-pc-lst .ot-host-notice {          float: left;          margin-left: 30px;        }        #onetrust-pc-sdk #ot-pc-lst .ot-arw-cntr {          float: none;          display: inline;        }        #onetrust-pc-sdk #ot-pc-lst .ot-ven-hdr {          float: left;          width: 100%;          max-width: 85%;        }        #onetrust-pc-sdk.ot-addtl-vendors          #ot-pc-lst          .ot-acc-cntr          .ot-arw-cntr:first-of-type {          float: right;        }        #onetrust-pc-sdk #ot-pc-title {          max-width: 100%;          white-space: break-spaces;          font-size: 20px;          overflow-x: visible;        }        #onetrust-pc-sdk .ot-subgrp-cntr li.ot-subgrp {          margin-left: 10px;          width: calc(100% - 10px);        }        #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {          width: auto;          float: right;        }        #onetrust-pc-sdk #ot-ven-lst .ot-arw-cntr {          float: right;        }        #onetrust-pc-sdk .ot-ven-hdr {          max-width: 47%;        }        #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr:first-of-type {          max-width: none;          padding-left: 20px;        }      }      @media only screen and (max-height: 425px) and (max-width: 896px) and (orientation: landscape) {        #onetrust-pc-sdk {          height: 100%;          width: 100%;          max-width: none;        }        #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr {          max-width: none;        }        #onetrust-pc-sdk .ot-pc-header {          padding: 10px;          width: calc(100% - 20px);          height: auto;          min-height: 20px;        }        #onetrust-pc-sdk .ot-pc-header .ot-pc-logo {          max-height: 20px;          width: 20%;        }        #onetrust-pc-sdk .ot-pc-header .ot-pc-logo img {          max-height: 100%;          font-size: 10px;        }        #onetrust-pc-sdk .ot-title-cntr {          width: 75%;        }        #onetrust-pc-sdk .ot-title-cntr #ot-pc-title {          white-space: break-spaces;          font-size: 20px;          overflow-x: visible;        }        #onetrust-pc-sdk .ot-pc-footer {          max-height: 90px;        }        #onetrust-pc-sdk .ot-pc-footer .ot-btn-container {          overflow-y: auto;        }        #onetrust-pc-sdk #ot-pc-lst {          overflow-y: auto;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr {          height: auto;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr #ot-pc-title {          max-height: 20px;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr .ot-lst-subhdr {          padding: 10px 5px;          float: none;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr .ot-lst-subhdr #ot-fltr-cntr {          margin-top: 5px;        }        #onetrust-pc-sdk #ot-pc-lst #ot-lst-cnt {          overflow: visible;        }        #onetrust-pc-sdk #ot-lst-cnt {          height: auto;          overflow: auto;        }        #onetrust-pc-sdk #accept-recommended-btn-handler {          float: right;        }        #onetrust-pc-sdk #ot-pc-content,        #onetrust-pc-sdk #ot-pc-lst {          height: calc(100% - 120px);        }        #onetrust-pc-sdk.ot-shw-fltr .ot-lst-cntr {          overflow: hidden;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-pc-lst {          position: static;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-modal {          top: 0;          width: 100%;          height: 100%;          max-height: none;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-modal > div {          margin: 0;          box-sizing: initial;          height: 100%;          max-height: none;        }        #onetrust-pc-sdk.ot-shw-fltr #clear-filters-handler {          padding-right: 20px;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-anchor {          display: none !important;        }        #onetrust-pc-sdk .ot-pc-footer button {          margin: 10px;        }      }      @media (max-width: 425px),        (max-width: 896px) and (max-height: 425px) and (orientation: landscape) {        #onetrust-pc-sdk .ot-pc-header {          padding-right: 20px;        }        #onetrust-pc-sdk .ot-pc-logo {          margin-left: 0px;          margin-top: 5px;          width: 150px;        }        #onetrust-pc-sdk .ot-close-icon {          width: 44px;          height: 44px;          background-size: 12px;        }        #onetrust-pc-sdk .ot-grp-hdr1 {          float: right;          padding-right: 10px;        }        #onetrust-pc-sdk .ot-grp-hdr1 + .ot-vlst-cntr {          padding-top: 10px;        }      }      @media only screen and (max-height: 610px) {        #onetrust-pc-sdk {          max-height: 100%;        }      }      @media (max-width: 425px) and (orientation: landscape) {        #onetrust-pc-sdk .ot-pc-header #ot-pc-title {          font-size: 10px;        }      }      #onetrust-consent-sdk #onetrust-pc-sdk,      #onetrust-consent-sdk #ot-search-cntr,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,      #onetrust-consent-sdk #onetrust-pc-sdk ot-grp-hdr1 .checkbox,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title:after,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-anchor {        background-color: #ffffff;      }      #onetrust-consent-sdk #onetrust-pc-sdk h3,      #onetrust-consent-sdk #onetrust-pc-sdk h4,      #onetrust-consent-sdk #onetrust-pc-sdk h5,      #onetrust-consent-sdk #onetrust-pc-sdk h6,      #onetrust-consent-sdk #onetrust-pc-sdk p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title h3,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-pc-lst        #ot-lst-title        p[aria-level="3"],      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-pc-lst        #ot-ven-lst        .consent-category,      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-inactive-leg-btn,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,      #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal {        color: #121212;      }      #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,      #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,      #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,      #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-link,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-legclaim-link,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-name a,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-host-lst        .ot-acc-hdr        .ot-host-expand,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info a,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-pc-content        #ot-pc-desc        .ot-link-btn,      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-vnd-info        a,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc a {        color: #024ddf;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .category-vendors-list-handler:hover {        text-decoration: underline;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-grpcntr.ot-acc-txt,      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-acc-txt        .ot-subgrp-tgl        .ot-switch.ot-toggle {        background-color: #e9e9e9;      }      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-ven-dets {        background-color: #e9e9e9;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        button:not(#clear-filters-handler):not(.ot-close-icon):not(          #filter-btn-handler        ):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not(          [aria-expanded]        ):not(.ot-link-btn),      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-active-leg-btn {        background-color: #024ddf;        border-color: #024ddf;        color: #ffffff;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {        border-color: #024ddf;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-remove-objection-handler {        background-color: transparent;        border: 1px solid transparent;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-inactive-leg-btn {        background-color: #ffffff;        color: #4d4d4d;        border-color: #4d4d4d;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-tgl        input:checked        + .ot-switch        .ot-switch-nob {        background-color: #468254;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch-nob {        background-color: #767676;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch,      .ot-switch .ot-switch-nob,      .ot-switch .ot-switch-nob:before,      #onetrust-pc-sdk        .ot-checkbox        input[type="checkbox"]:focus        + label::before,      #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {        outline-color: #000000;        outline-width: 1px;        outline-offset: 1px;      }      #onetrust-pc-sdk .ot-host-item > button:focus,      #onetrust-pc-sdk .ot-ven-item > button:focus {        border: 1px solid #000000;      }      #onetrust-consent-sdk #onetrust-pc-sdk *:focus,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {        outline: 1px solid #000000;        outline-offset: 1px;      }      #onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {        background-color: #f4f4f4;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {        background-color: #ffffff;      }      #onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {        background-color: #f4f4f4;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {        background-color: #ffffff;      }      .ot-sdk-cookie-policy {        font-family: inherit;        font-size: 16px;      }      .ot-sdk-cookie-policy.otRelFont {        font-size: 1rem;      }      .ot-sdk-cookie-policy h3,      .ot-sdk-cookie-policy h4,      .ot-sdk-cookie-policy h6,      .ot-sdk-cookie-policy p,      .ot-sdk-cookie-policy li,      .ot-sdk-cookie-policy a,      .ot-sdk-cookie-policy th,      .ot-sdk-cookie-policy #cookie-policy-description,      .ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,      .ot-sdk-cookie-policy #cookie-policy-title {        color: dimgray;      }      .ot-sdk-cookie-policy #cookie-policy-description {        margin-bottom: 1em;      }      .ot-sdk-cookie-policy h4 {        font-size: 1.2em;      }      .ot-sdk-cookie-policy h6 {        font-size: 1em;        margin-top: 2em;      }      .ot-sdk-cookie-policy th {        min-width: 75px;      }      .ot-sdk-cookie-policy a,      .ot-sdk-cookie-policy a:hover {        background: #fff;      }      .ot-sdk-cookie-policy thead {        background-color: #f6f6f4;        font-weight: bold;      }      .ot-sdk-cookie-policy .ot-mobile-border {        display: none;      }      .ot-sdk-cookie-policy section {        margin-bottom: 2em;      }      .ot-sdk-cookie-policy table {        border-collapse: inherit;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy {        font-family: inherit;        font-size: 1rem;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {        color: dimgray;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {        margin-bottom: 1em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup {        margin-left: 1.5em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-group-desc,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td {        font-size: 0.9em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a {        font-size: inherit;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-group {        font-size: 1em;        margin-bottom: 0.6em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-title {        margin-bottom: 1.2em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy > section {        margin-bottom: 1em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {        min-width: 75px;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover {        background: #fff;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead {        background-color: #f6f6f4;        font-weight: bold;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border {        display: none;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section {        margin-bottom: 2em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li {        list-style: disc;        margin-left: 1.5em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4 {        display: inline-block;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {        border-collapse: inherit;        margin: auto;        border: 1px solid #d7d7d7;        border-radius: 5px;        border-spacing: initial;        width: 100%;        overflow: hidden;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {        border-bottom: 1px solid #d7d7d7;        border-right: 1px solid #d7d7d7;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {        border-bottom: 0px;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child {        border-right: 0px;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {        width: 25%;      }      .ot-sdk-cookie-policy[dir="rtl"] {        text-align: left;      }      #ot-sdk-cookie-policy h3 {        font-size: 1.5em;      }      @media only screen and (max-width: 530px) {        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {          display: block;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr {          position: absolute;          top: -9999px;          left: -9999px;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {          margin: 0 0 1em 0;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2)          tr:nth-child(odd)          a {          background: #f6f6f4;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td {          border: none;          border-bottom: 1px solid #eee;          position: relative;          padding-left: 50%;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {          position: absolute;          height: 100%;          left: 6px;          width: 40%;          padding-right: 10px;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border {          display: inline-block;          background-color: #e4e4e4;          position: absolute;          height: 100%;          top: 0;          left: 45%;          width: 2px;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {          content: attr(data-label);          font-weight: bold;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li {          word-break: break-word;          word-wrap: break-word;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {          overflow: hidden;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {          border: none;          border-bottom: 1px solid #d7d7d7;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {          display: block;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {          width: auto;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {          margin: 0 0 1em 0;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {          height: 100%;          width: 40%;          padding-right: 10px;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {          content: attr(data-label);          font-weight: bold;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li {          word-break: break-word;          word-wrap: break-word;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr {          position: absolute;          top: -9999px;          left: -9999px;          z-index: -9999;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {          border-bottom: 1px solid #d7d7d7;          border-right: 0px;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy          table          tr:last-child          td:last-child {          border-bottom: 0px;        }      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {        color: #696969;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {        color: #696969;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-group {        color: #026cdf;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {        color: #026cdf;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {        background-color: #f8f8f8;      }      .ot-floating-button__front {        background-image: url("https://cdn.cookielaw.org/logos/static/ot_persistent_cookie_icon.png");      }    ',
      }}
      id="onetrust-style"
    />
    <meta
      content="AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="
      httpEquiv="origin-trial"
    />
    <meta
      content="Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="
      httpEquiv="origin-trial"
    />
    <meta
      content="A9nrunKdU5m96PSN1XsSGr3qOP0lvPFUB2AiAylCDlN5DTl17uDFkpQuHj1AFtgWLxpLaiBZuhrtb2WOu7ofHwEAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQUlQcm9tcHRBUElNdWx0aW1vZGFsSW5wdXQiLCJleHBpcnkiOjE3NzQzMTA0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      httpEquiv="origin-trial"
    />
    <meta
      content="A93bovR+QVXNx2/38qDbmeYYf1wdte9EO37K9eMq3r+541qo0byhYU899BhPB7Cv9QqD7wIbR1B6OAc9kEfYCA4AAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQUlQcm9tcHRBUElNdWx0aW1vZGFsSW5wdXQiLCJleHBpcnkiOjE3NzQzMTA0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      httpEquiv="origin-trial"
    />
    <meta
      content="A1S5fojrAunSDrFbD8OfGmFHdRFZymSM/1ss3G+NEttCLfHkXvlcF6LGLH8Mo5PakLO1sCASXU1/gQf6XGuTBgwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQUlQcm9tcHRBUElNdWx0aW1vZGFsSW5wdXQiLCJleHBpcnkiOjE3NzQzMTA0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      httpEquiv="origin-trial"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "      /* Chat Overlay Container */      .fx-chat-container {        font-family: Averta, helvetica, arial, sans-serif;        position: fixed;        bottom: 20px;        right: 20px;        z-index: 9999;      }      /* Chat window */      .fx-chat-window {        position: fixed;        bottom: -1000px;        right: 20px;        width: 350px;        height: 640px;        background-color: #ededed;        z-index: 999;        opacity: 0;        border-top-right-radius: 0.35rem;        border-top-left-radius: 0.35rem;        box-shadow: 0rem 3rem 4rem rgb(0, 0, 0, 0.1);        transition: bottom 0.5s ease-in;      }      .fx-chat-container.active .fx-chat-window {        bottom: 60px;      }      /* Chat header */      .fx-chat-header {        padding: 10px;        background-color: #024ddf;        color: #ffffff;        font-weight: 600;        display: flex;        justify-content: right;        border-top-right-radius: 0.35rem;        border-top-left-radius: 0.35rem;      }      .fx-chat-header .fx-chat-title {        font-size: 18px;        font-weight: 600; /* Semi-bold */        text-transform: capitalize; /* Title Case */        letter-spacing: 0.02em; /* Tracking: 2% */        line-height: 24px;        flex: 1;        display: flex;        justify-content: left;        align-items: center;        margin-left: 0.1em;      }      /* Chat iframe */      .fx-chat-wrapper {        flex: 1;        height: 100%;      }      /* Chat close button */      .fx-chat-close-button {        cursor: pointer;        top: 10px;        right: 10px;        width: 26px;        height: 24px;        text-align: center;      }      /* Chat button icon (you may need to adjust the image URL) */      .fx-chat-close-icon {        width: 15px;        height: 15px;        padding-top: 3px;        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)          brightness(100%) contrast(100%);        background-size: cover;      }      /* Media query for screens shorter than 600px */      @media only screen and (max-height: 600px) {        .fx-chat-window {          height: 100dvh;        }      }      /* Media query for screens shorter than 840px */      @media only screen and (max-height: 840px) {        .fx-chat-window {          height: calc(100dvh - 200px);        }      }      /* Responsive styles for mobile devices */      @media only screen and (max-width: 600px) and (max-height: 840px) {        .fx-chat-window {          width: 100%;          max-height: calc(100dvh - 44px);          background-color: #ffffff;          bottom: -1000px;          right: 0px;          padding-top: env(safe-area-inset-top);        }        /* Chat header */        .fx-chat-header {          padding: 10px;          background-color: #024ddf;          color: #ffffff;          font-weight: 600;          display: flex;          justify-content: right;          border-top-right-radius: 0px;          border-top-left-radius: 0px;        }        .fx-chat-container.active .fx-chat-window {          height: 100dvh;          bottom: 44px;        }      }    ",
      }}
    />
    <div id="__next">
      <div className="sc-158d7b44-0 kxApCb">
        Tu navegador no es compatible. Para una mejor experiencia, utiliza
        cualquiera de estos navegadores:
        <a
          className="Link__StyledLink-sc-pudy0l-0 fsEShp"
          href="https://www.google.com/chrome/">
          Chrome
        </a>
        ,
        <a
          className="Link__StyledLink-sc-pudy0l-0 fsEShp"
          href="https://www.mozilla.org/firefox/new/">
          Firefox
        </a>
        ,
        <a
          className="Link__StyledLink-sc-pudy0l-0 fsEShp"
          href="https://support.apple.com/downloads/safari">
          Safari
        </a>
        ,
        <a
          className="Link__StyledLink-sc-pudy0l-0 fsEShp"
          href="https://www.microsoft.com/edge">
          Edge
        </a>
      </div>
      <div className="sc-e39c8cc5-0 jkkrwJ">
        <div className="sc-e39c8cc5-1 gAUfyf">
          <header className="sc-24ab4067-0 fBhbzB">
            <section className="sc-aa45b91c-0 fgRwxD">
              <a
                className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-aa45b91c-1 kDteKW"
                href="#main-content">
                Continuar
              </a>
            </section>
            <div className="sc-c48df880-0 fJmXSl">
              <div className="sc-342f61e4-0 cNkgPq">
                <button
                  aria-expanded="false"
                  className="sc-342f61e4-2 jgcCYz"
                  title="México">
                  <svg
                    aria-hidden="true"
                    className="sc-342f61e4-5 cWRcbH"
                    fill="none"
                    height="1.5em"
                    viewBox="0 0 512 512"
                    width="1.5em">
                    <path
                      d="M128 477.8A254.8 254.8 0 0 0 256 512c46.6 0 90.3-12.5 128-34.2V34.2A254.8 254.8 0 0 0 256 0c-46.6 0-90.3 12.5-128 34.2z"
                      fill="#FFF"
                    />
                    <path
                      d="M0 256A256 256 0 0 1 144 25.6v460.6A256 256 0 0 1 0 256v-.1Z"
                      fill="#496E2D"
                    />
                    <path
                      d="M512 256A256 256 0 0 0 368 25.7v460.6A256 256 0 0 0 512 256"
                      fill="#D80027"
                    />
                    <path d="M256 277v10h12l10-22z" fill="#FFC635" />
                    <path
                      d="M160 242a96 96 0 1 0 192 0h-11a85 85 0 0 1-170 0zm39 17-4 2c-2 2-2 6 1 8 15 14 34 22 54 24v17h12v-17c20-2 39-10 54-24 3-2 3-6 1-8s-6-2-8 0a78 78 0 0 1-53 21c-19 0-38-8-53-21z"
                      fill="#496E2D"
                    />
                    <path
                      d="M256 316c-14 0-28-5-40-13l6-9c20 13 48 13 68 0l7 9c-12 8-26 13-41 13"
                      fill="#338AF3"
                    />
                    <path
                      d="M256 174c22 11 12 33 11 34l-2-4c-5-11-18-18-31-18v11c6 0 11 5 11 11-7 7-9 17-4 26l4 8-13 23 29-7 18 18v-11l11 11 23-11-35-21-5-21 28 16c4 11 12 21 23 26 9-83-42-91-61-91z"
                      fill="#584528"
                    />
                    <path
                      d="M222 271c-15 0-33-12-38-40l11-2c4 23 18 31 27 31q4.5 0 6-3c0-2 0-3-6-5-3-1-7-2-10-5-10-12 4-24 11-30 1-1 2-2 1-3 0 0-2-2-5-2-7 0-12-4-14-11-2-6 2-13 8-17l5 11c-2 0-2 2-2 4 0 0 1 2 3 2 7 0 14 4 16 9 1 3 2 9-5 15-7 7-11 12-9 15l5 1c5 2 14 5 13 17-1 8-8 13-17 13"
                      fill="#6DA544"
                    />
                    <path
                      clipRule="evenodd"
                      d="m234 186-12 11v11l18-9c3-1 3-5 1-7zm-62 97a8 8 0 1 0 0-16 8 8 0 0 0 0 16m25 19a8 8 0 1 1-16 0 8 8 0 0 1 16 0m19 29a8 8 0 1 0 0-16 8 8 0 0 0 0 16m89-8a8 8 0 1 1-16 0 8 8 0 0 1 16 0m19-13a8 8 0 1 0 0-16 8 8 0 0 0 0 16m25-35a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
                      fill="#FFC635"
                      fillRule="evenodd"
                    />
                    <path
                      d="M262 299h-12a11 11 0 0 0 0 22h12a11 11 0 0 0 0-22"
                      fill="#FF9811"
                    />
                  </svg>
                  <span aria-hidden="true">MX</span>
                  <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                    México seleccionado, cambiar país
                  </span>
                </button>
                <button
                  aria-expanded="false"
                  className="sc-342f61e4-1 kkMjSI"
                  data-bdd="language-button"
                  title="Español (es-mx)">
                  <svg
                    aria-hidden="true"
                    className="BaseSvg-sc-yh8lnd-0 SpeechBubbleIcon___StyledBaseSvg-sc-bekthj-0 ckLyyv"
                    focusable="false"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em">
                    <path d="M23 3H1v13.8h16.72L23 21.4zM2.5 15.3V4.5h19v13.6l-3.22-2.8zM17 8.75H7v-1.5h10zm0 3.5H7v-1.5h10z" />
                  </svg>
                  <span aria-hidden="true" className="sc-342f61e4-4 fAhasG">
                    es
                  </span>
                  <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                    Español seleccionado, cambiar idioma
                  </span>
                </button>
                <button
                  aria-expanded="false"
                  className="sc-342f61e4-3 jQitzC"
                  data-testid="region-button"
                  title="Todo México">
                  <svg
                    aria-hidden="true"
                    className="BaseSvg-sc-yh8lnd-0 CompassArrowIcon___StyledBaseSvg-sc-1do14k4-0 ckLyyv"
                    focusable="false"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em">
                    <path d="m3.17 12.12 5.82 2.5.4.4 2.5 5.81 8.7-17.43zM1 11.49 21.97 1 23 2.03 12.51 23l-1.39-.04L8.1 15.9l-7.06-3.02z" />
                  </svg>
                  <span aria-hidden="true" className="sc-342f61e4-4 fAhasG">
                    Todo México
                  </span>
                  <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                    Todo México seleccionado, cambiar región
                  </span>
                </button>
              </div>
              <nav
                aria-label="Links adicionales"
                className="sc-c48df880-2 kJWxjT">
                <ul
                  className="UnstyledList-sc-ix96mm-0 sc-c48df880-3 ekOJfs kUxokX"
                  role="list">
                  <li role="listitem">
                    <a
                      className="sc-c48df880-4 hCrROi"
                      href="https://help.ticketmaster.com.mx/hc/es-mx">
                      Ayuda
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav
              aria-label="Navegación principal"
              className="sc-24ab4067-1 hXTTZM"
              data-testid="stickyHeader">
              <div className="sc-24ab4067-2 gwEKig">
                <div className="sc-6cdc3e95-1 fEAqZG">
                  <button
                    aria-expanded="false"
                    aria-label="Abrir menú de navegación"
                    className="IconButton__Button-sc-19baojp-0 jyRnZr sc-5b504bec-0 gkMgLG sc-6cdc3e95-2 cCrnXf"
                    type="button">
                    <svg
                      aria-hidden="true"
                      className="BaseSvg-sc-yh8lnd-0 HamburgerIcon___StyledBaseSvg-sc-1cla98k-0 ckLyyv"
                      focusable="false"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      width="1.5em">
                      <path d="M23 5.75H1v-1.5h22zm-22 5.5h16v1.5H1zm12 7H1v1.5h12z" />
                    </svg>
                  </button>
                  <a
                    className="sc-6cdc3e95-3 gzLKfj"
                    href="https://www.ticketmaster.com.mx/">
                    <svg
                      aria-hidden="true"
                      className="sc-6cdc3e95-0 xQQQD"
                      fill="#fff"
                      height="100%"
                      viewBox="0 0 135 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M41.57 6.27c-4.02 0-6.97 3.63-6.97 7.4 0 3.62 2.38 5.32 5.9 5.32 1.3 0 2.66-.3 3.9-.68l.4-2.5a8.98 8.98 0 0 1-3.75.86c-2.04 0-3.23-.71-3.39-2.62l-.02-.34v-.1a6.46 6.46 0 0 1 .52-2.41c.61-1.55 1.48-2.62 3.36-2.62 1.33 0 2.02.73 2.02 2.03 0 .28-.02.54-.07.83H39.1a7.57 7.57 0 0 0-.34 2.17h7.5c.2-.9.32-1.8.32-2.72 0-3.09-2-4.62-5.02-4.62zm-5.4.28h-4.15l-4.44 4.41h-.05L29.65 1h-3.19l-3.78 17.7h3.11l1.38-6.44h.05l3.16 6.45h3.6l-3.7-6.62 5.88-5.54zm15.16 8.8a5 5 0 0 1 .15-1.18l1.16-5.3h2.86l.5-2.32h-2.86l.79-3.61-3.42 1.1-.55 2.5h-2.3l-.51 2.32h2.3l-.9 4.11c-.2.97-.4 1.89-.4 2.83 0 2.34 1.52 3.2 3.69 3.2.54 0 1.16-.18 1.7-.3l.56-2.45a4.28 4.28 0 0 1-1.55.28c-.72 0-1.22-.44-1.22-1.18zm-47.14 0c0-.47.07-.9.14-1.18l1.16-5.3h2.86l.5-2.32H5.99l.79-3.61-3.43 1.1-.54 2.5H.5L0 8.87h2.3l-.9 4.11c-.21.97-.4 1.89-.4 2.83C1 18.14 2.52 19 4.69 19c.54 0 1.16-.18 1.7-.3l.56-2.45a4.27 4.27 0 0 1-1.55.28c-.71 0-1.22-.44-1.22-1.18zm12.48-1.98c0-2.29 1.42-4.65 3.97-4.65.88 0 1.7.21 2.33.62l.78-2.6a11.4 11.4 0 0 0-3.19-.47c-4.4 0-7.22 3.23-7.22 7.48 0 3.14 2.04 5.24 5.2 5.24 1.05 0 2.1-.1 3.07-.57l.36-2.5c-.83.4-1.81.61-2.6.61-2.18 0-2.7-1.58-2.7-3.16zM14.5 1.31h-3.19l-.67 3.02h3.2l.66-3.02zm-4.36 5.24L7.54 18.7h3.19l2.61-12.16h-3.19zm72.06-.27c-1.43 0-2.81.26-4.17.73l-.45 2.53a9.48 9.48 0 0 1 4.02-.95c1.12 0 2.45.35 2.45 1.58 0 .36 0 .71-.1 1.04h-1.11c-3 0-7.52.3-7.52 4.32 0 2.24 1.57 3.47 3.78 3.47 1.76 0 2.86-.78 3.95-2.15h.05l-.33 1.87h2.68c.29-2.3 1.5-7.06 1.5-8.7 0-2.85-2.3-3.74-4.75-3.74zM80 16.68c-.82 0-1.62-.42-1.62-1.27 0-2.05 2.56-2.31 4.1-2.31h1.13c-.5 1.96-1.24 3.58-3.61 3.58zM71.6 6.27c-1.72 0-3.5.73-4.31 2.31h-.05c-.17-1.47-1.67-2.31-3.12-2.31-1.5 0-2.9.66-3.75 1.9h-.05l.29-1.62h-2.98l-.26 1.35-2.23 10.8h3.18l1.26-5.78c.4-1.63 1-4.2 3.16-4.2.82 0 1.5.57 1.5 1.46 0 .74-.23 1.87-.4 2.6l-1.28 5.93h3.18L67 12.92c.4-1.65.95-4.2 3.17-4.2.8 0 1.5.57 1.5 1.46 0 .74-.24 1.87-.4 2.6l-1.3 5.93h3.2l1.27-5.81c.27-1 .55-2.22.55-3.3a3.4 3.4 0 0 0-3.4-3.33zm41.24 0c-4.02 0-6.97 3.63-6.97 7.4 0 3.62 2.38 5.32 5.9 5.32 1.3 0 2.66-.3 3.9-.68l.4-2.5a9 9 0 0 1-3.75.86c-2.04 0-3.23-.71-3.38-2.62-.01-.12-.03-.22-.03-.34v-.1c.02-.84.2-1.66.53-2.41.6-1.55 1.47-2.62 3.35-2.62 1.33 0 2.02.73 2.02 2.03 0 .28-.02.54-.07.83h-4.36a7.57 7.57 0 0 0-.34 2.17h7.5c.2-.9.32-1.8.32-2.72 0-3.09-2-4.62-5.02-4.62zm10.18 2.57h-.05l.43-2.3h-3.05l-.28 1.64-2.19 10.53h3.19l1.14-5.46c.4-1.96 1.5-3.96 3.76-3.96.4 0 .85.07 1.2.19l.68-3.1a4.9 4.9 0 0 0-1.22-.11c-1.47 0-3.04 1.25-3.61 2.57zm-20.87 6.51c0-.47.07-.9.14-1.18l1.17-5.3h2.85l.5-2.32h-2.85l.78-3.61-3.42 1.1-.55 2.5h-2.3l-.5 2.32h2.3l-.9 4.11c-.22.97-.4 1.89-.4 2.83 0 2.34 1.52 3.2 3.68 3.2.55 0 1.17-.18 1.71-.3l.55-2.45c-.4.17-.98.28-1.55.28-.71 0-1.21-.44-1.21-1.18zm-13.31-5.21c0 3.04 4.13 3.23 4.13 5.2 0 .98-1.12 1.33-2.19 1.33a6.01 6.01 0 0 1-3.04-.94l-.7 2.53a8.8 8.8 0 0 0 3.74.73c2.74 0 5.52-.95 5.52-4.1 0-2.98-4.14-3.55-4.14-5.08 0-.97 1.19-1.23 2.14-1.23.9 0 1.79.26 2.13.44l.69-2.38a13.27 13.27 0 0 0-2.98-.37c-2.53 0-5.3 1.01-5.3 3.87zm43.23-3.86A2.74 2.74 0 0 0 129.33 9c0 1.5 1.23 2.72 2.74 2.72A2.73 2.73 0 0 0 134.81 9c0-1.5-1.23-2.72-2.74-2.72zm.01 5.04A2.23 2.23 0 0 1 129.86 9c0-1.3.95-2.31 2.22-2.31 1.26 0 2.21 1.01 2.21 2.31s-.95 2.32-2.2 2.32zm1.28-3.02c0-.6-.36-.9-1.1-.9h-1.23v3.2h.52V9.17h.44l.9 1.41h.55l-.91-1.4c.5 0 .83-.38.83-.89zm-1.81.48V7.8h.62c.34 0 .66.1.66.47 0 .41-.26.5-.66.5h-.62z" />
                    </svg>
                    <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                      Ticketmaster Página principal
                    </span>
                  </a>
                </div>
              </div>
              <ul
                aria-label="Categorías"
                className="UnstyledList-sc-ix96mm-0 sc-1fc5460d-0 ekOJfs kfhylz"
                role="list">
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 hsyZLL"
                    data-testid="Conciertos y Festivales"
                    href="/section/conciertos"
                    role="button"
                    tabIndex="0">
                    Conciertos y Festivales
                  </a>
                </li>
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 hsyZLL"
                    data-testid="Teatro y Cultura"
                    href="/section/teatro-culturales"
                    role="button"
                    tabIndex="0">
                    Teatro y Cultura
                  </a>
                </li>
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 iNZqDZ"
                    data-testid="Deportes"
                    href="/section/deportes"
                    role="button"
                    tabIndex="0">
                    Deportes
                  </a>
                </li>
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 iNZqDZ"
                    data-testid="Familiares"
                    href="/section/familiares"
                    role="button"
                    tabIndex="0">
                    Familiares
                  </a>
                </li>
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 iNZqDZ"
                    data-testid="Especiales"
                    href="/section/especiales"
                    role="button"
                    tabIndex="0">
                    Especiales
                  </a>
                </li>
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <a
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 iNZqDZ"
                    data-testid="Ciudades"
                    href="/discover/cities"
                    role="button"
                    tabIndex="0">
                    Ciudades
                  </a>
                </li>
                <li className="sc-1fbd0e2a-1 lkOKMH" role="listitem">
                  <button
                    aria-controls=""
                    aria-expanded="false"
                    className="sc-1fbd0e2a-0 hsyZLL"
                    data-testid="Más"
                    role="button"
                    tabIndex="0">
                    Más
                  </button>
                </li>
              </ul>
              <div className="sc-24ab4067-3 hFQqBe">
                <button aria-expanded="false" className="sc-24ab4067-4 fskPFc">
                  <svg
                    aria-hidden="true"
                    className="BaseSvg-sc-yh8lnd-0 MagnifyingGlassIcon___StyledBaseSvg-sc-1pooy9n-0 ckLyyv"
                    focusable="false"
                    height="1.5em"
                    viewBox="0 0 23 24"
                    width="1.5em">
                    <path d="M3.78 4.78 1.62 10l2.16 5.22L9 17.38l5.22-2.16L16.38 10l-2.16-5.22L9 2.62zM9 1l6.36 2.64L18 10l-2.33 5.61 6.11 6.11-1.06 1.06-6.1-6.1L9 19l-6.36-2.64L0 10l2.64-6.36z" />
                  </svg>
                  <span className="sc-24ab4067-5 fSwHDp">Buscador</span>
                </button>
                <div className="sc-d526de88-0 fVyKtA">
                  <form
                    action="/search"
                    className="sc-d526de88-1 hnWxo"
                    role="search">
                    <span
                      aria-live="polite"
                      className="VisuallyHidden-sc-8buqks-0 lmhoCy"
                      role="status"
                    />
                    <div className="sc-d526de88-2 iDAcma">
                      <div className="sc-d526de88-3 kgJzNW">
                        <label
                          className="sc-d526de88-4 leZwps"
                          htmlFor=":R5mtamH3:">
                          Buscar
                        </label>
                        <input
                          aria-activedescendant=""
                          aria-autocomplete="list"
                          aria-controls=":R5mtam: :R5mtamH1: :R5mtamH2:"
                          aria-expanded="true"
                          autoCapitalize="none"
                          autoComplete="off"
                          autoCorrect="off"
                          className="sc-d526de88-5 hOHPoj"
                          id=":R5mtamH3:"
                          name="q"
                          placeholder="Artista, evento o inmueble"
                          role="combobox"
                          spellCheck="false"
                          type="text"
                        />
                      </div>
                      <button className="sc-d526de88-6 klsPeD" type="submit">
                        <svg
                          aria-hidden="true"
                          className="BaseSvg-sc-yh8lnd-0 MagnifyingGlassIcon___StyledBaseSvg-sc-1pooy9n-0 ckLyyv"
                          focusable="false"
                          height="1.5em"
                          viewBox="0 0 23 24"
                          width="1.5em">
                          <path d="M3.78 4.78 1.62 10l2.16 5.22L9 17.38l5.22-2.16L16.38 10l-2.16-5.22L9 2.62zM9 1l6.36 2.64L18 10l-2.33 5.61 6.11 6.11-1.06 1.06-6.1-6.1L9 19l-6.36-2.64L0 10l2.64-6.36z" />
                        </svg>
                        <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                          Buscar
                        </span>
                      </button>
                    </div>
                    <div className="sc-672a1d96-0 hVkyXL" hidden>
                      <h4
                        aria-hidden="true"
                        className="sc-672a1d96-2 fcYzrB"
                        id=":R1tmtam:"
                      />
                      <ul
                        aria-labelledby=":R1tmtam:"
                        className="sc-672a1d96-1 dJfZbi"
                        id=":R5mtam:"
                        role="listbox"
                      />
                    </div>
                  </form>
                </div>
                <button
                  aria-haspopup="dialog"
                  className="sc-ef2d1829-0 jCGahB"
                  data-testid="accountLink">
                  <svg
                    aria-hidden="true"
                    className="BaseSvg-sc-yh8lnd-0 UserIcon___StyledBaseSvg-sc-16rhua7-0 ckLyyv"
                    focusable="false"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px">
                    <path d="M8 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0M12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m6.49 12H5.43L1 16.9V23h22v-6.12zM2.5 17.58 6 14.5h11.93l3.57 3.07v3.93h-19z" />
                  </svg>
                  <span>Mi Cuenta</span>
                </button>
              </div>
            </nav>
          </header>
        </div>
        <main id="main-content">
          <div className="sc-f59bc11-0 hKBPDw">
            <div className="sc-f59bc11-1 klnyKL">
              <div className="sc-f59bc11-4 giXrmw">
                <div className="sc-f59bc11-5 bHmnJy">
                  <div className="sc-16cc196b-0 bJtyWS">
                    <nav aria-label="Ruta de navegación">
                      <ol
                        className="sc-22a4adb6-0 dBRAti"
                        data-testid="breadcrumb">
                        <li className="sc-22a4adb6-1 bjyHbM">
                          <a
                            aria-current="false"
                            className="sc-5ff3f33f-1 jVrMWe sc-22a4adb6-4 dsVDXb"
                            href="/">
                            Inicio
                          </a>
                          <span
                            aria-hidden="true"
                            className="sc-22a4adb6-2 gvQYjH"
                            role="presentation"
                          />
                        </li>
                        <li className="sc-22a4adb6-1 bjyHbM">
                          <span
                            aria-current="page"
                            className="sc-22a4adb6-5 giJiCy">
                            Mis Boletos
                          </span>
                        </li>
                      </ol>
                    </nav>
                    <h1 className="sc-16cc196b-1 iENlCo">Mis Boletos</h1>
                    <nav
                      aria-label="Mis Boletos"
                      className="sc-e4439fe2-0 clvfHR"
                      data-testid="orderSummaryHNav">
                      <ul className="sc-d400a5dd-0 KeuKZ">
                        <li>
                          <a
                            aria-current="page"
                            className="sc-5ff3f33f-1 jVrMWe sc-d400a5dd-1 ddEPRr"
                            href="/user/orders">
                            Próximos eventos
                          </a>
                        </li>
                        <li>
                          <a
                            className="sc-5ff3f33f-1 jVrMWe sc-d400a5dd-1 cxYnWK"
                            href="/user/orders/past-events">
                            Eventos pasados
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-f59bc11-2 hlQnCP">
              <svg
                aria-hidden="true"
                className="BaseSvg-sc-yh8lnd-0 TicketmasterTIcon___StyledBaseSvg-sc-14ttjcp-0 ckLyyv sc-f59bc11-3 jXPuJD"
                focusable="false"
                height="1.5em"
                viewBox="0 0 24 24"
                width="1.5em">
                <path d="M11.23 17.47c0-.59.1-1.12.18-1.47l1.45-6.62h3.57l.63-2.88h-3.57l.98-4.5-4.28 1.38-.68 3.12H6.62L6 9.38h2.88L7.75 14.5a16 16 0 0 0-.5 3.52c0 2.92 1.9 3.98 4.6 3.98.69 0 1.46-.21 2.15-.36l.68-3.06c-.5.21-1.22.36-1.93.36-.9 0-1.52-.56-1.52-1.47" />
              </svg>
              <div className="sc-8486e8e9-0 jOAVSY sc-f59bc11-9 hJdlKr">
                <p className="sc-8486e8e9-1 fmiwWm">
                  <span className="sc-8486e8e9-2 fbpUeh">
                    ¡Bienvenido de vuelta!
                  </span>
                  <span className="sc-8486e8e9-3 iTJOrD" data-cs-mask="true">
                    Nery de Lucio
                  </span>
                </p>
              </div>
            </div>
            <div className="sc-f59bc11-6 hxlXMw">
              <nav aria-label="Mi Cuenta" className="sc-592170a3-0 iMIsZQ">
                <div className="sc-f6e50073-0 iiFOoS sc-592170a3-1 cTRJFB">
                  <button
                    aria-expanded="true"
                    className="sc-f6e50073-1 foBYFA"
                    data-testid="myTickets">
                    <div className="sc-f6e50073-2 kmtzPG">
                      <svg
                        aria-hidden="true"
                        className="BaseSvg-sc-yh8lnd-0 TicketsIcon___StyledBaseSvg-sc-o359im-0 ckLyyv"
                        focusable="false"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        width="1.5em">
                        <path d="M1 4.11 15.6 1l.64 2.96L23 5.18l-2.73 15.36-.25.18c-.79.56-1.34.95-1.98 1.4q-.45.3-1 .7l-.26.18-8.25-1.48-3.67.78zM12.42 20.7l4 .72q.41-.29.76-.53c.57-.4 1.07-.75 1.72-1.2L21.26 6.4l-4.69-.85 2.35 11.08-1.83 3.06zM2.78 5.27l3.24 15.25 10.12-2.16 1.19-2L14.45 2.8zm10.72 10.9-6.86 1.45-.3-1.47 6.85-1.46zm.47-9.85L4.67 8.3l1.35 6.38 9.3-1.98zm-6.8 6.57-.72-3.43L12.8 8.1l.73 3.44zm5.14-2.12L8 11.7l-.32-1.47L12 9.3z" />
                      </svg>
                    </div>
                    <span className="sc-f6e50073-4 gskSvq">Mis Boletos</span>
                    <svg
                      aria-hidden="true"
                      className="BaseSvg-sc-yh8lnd-0 ChevronIcon___StyledBaseSvg-sc-1y4em6t-0 ckLyyv sc-f6e50073-6 fJPqt"
                      focusable="false"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      width="1.5em">
                      <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                    </svg>
                  </button>
                  <div className="sc-f6e50073-8 dJfWDt">
                    <ul className="UnstyledList-sc-ix96mm-0 ekOJfs" role="list">
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          href="/user/orders">
                          <div className="sc-f6e50073-10 pXgit">
                            Ver próximos eventos
                          </div>
                        </a>
                      </li>
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          href="/user/orders/past-events">
                          <div className="sc-f6e50073-10 pXgit">
                            Ver eventos pasados
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sc-f6e50073-0 fcQZMo sc-592170a3-1 cTRJFB">
                  <button
                    aria-expanded="false"
                    className="sc-f6e50073-1 foBYFA"
                    data-testid="myProfile">
                    <div className="sc-f6e50073-2 kmtzPG">
                      <svg
                        aria-hidden="true"
                        className="BaseSvg-sc-yh8lnd-0 IdCardIcon___StyledBaseSvg-sc-jnsaq9-0 ckLyyv"
                        focusable="false"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        width="1.5em">
                        <path d="M23 4.25H1v15.5h14.65l4.3-.01L23 16.77zM9 16.27v1.98H5v-1.98l.59-.52H8.4zm1.5-.68-1.52-1.34H5.02L3.5 15.59v2.66h-1V5.75h9v12.5h-1zM13 5.75h8.5v10.38l-2.16 2.11-3.7.01H13zm-7.25 4.5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M7 7.5A2.75 2.75 0 1 1 7 13a2.75 2.75 0 0 1 0-5.5m7 4.25h6.25v-1.5H14zm4.72 2.5H14v-1.5h4.72z" />
                      </svg>
                    </div>
                    <span className="sc-f6e50073-4 gskSvq">Mi Perfil</span>
                    <svg
                      aria-hidden="true"
                      className="BaseSvg-sc-yh8lnd-0 ChevronIcon___StyledBaseSvg-sc-1y4em6t-0 ckLyyv sc-f6e50073-6 jMgmIb"
                      focusable="false"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      width="1.5em">
                      <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                    </svg>
                  </button>
                  <div className="sc-f6e50073-8 dTHzZi">
                    <ul className="UnstyledList-sc-ix96mm-0 ekOJfs" role="list">
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="profileDetails"
                          href="https://my.ticketmaster.com.mx/settings?lang=es-mx">
                          <div className="sc-f6e50073-10 pXgit">
                            Detalles del perfil
                          </div>
                        </a>
                      </li>
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="editBillingInformation"
                          href="/member/edit_billing?tm_link=mytm_myacct_BillingInfo">
                          <div className="sc-f6e50073-10 pXgit">
                            Editar información de facturación
                          </div>
                        </a>
                      </li>
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="signInAndSecurity"
                          href="https://my.ticketmaster.com.mx/security">
                          <div className="sc-f6e50073-10 pXgit">
                            Inicio de Sesión y Seguridad
                          </div>
                        </a>
                      </li>
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="sellerDetails"
                          href="/user/profile/seller">
                          <div className="sc-f6e50073-10 pXgit">
                            Detalles del vendedor
                          </div>
                        </a>
                      </li>
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="giftCardBalance"
                          href="/giftcards/balance_inquiry">
                          <div className="sc-f6e50073-10 pXgit">
                            Ver el saldo de la Tarjeta de Regalo
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sc-f6e50073-0 fcQZMo sc-592170a3-1 cTRJFB">
                  <button
                    aria-expanded="false"
                    className="sc-f6e50073-1 foBYFA"
                    data-testid="mySettings">
                    <div className="sc-f6e50073-2 kmtzPG">
                      <svg
                        aria-hidden="true"
                        className="BaseSvg-sc-yh8lnd-0 CogIcon___StyledBaseSvg-sc-61sguc-0 ckLyyv"
                        focusable="false"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        width="1.5em">
                        <path d="m5.42 5.4 1.65-1.32 1.87 1.48 3.1-.7 1.03-2.15 2.06.47v2.38l2.49 1.99 2.33-.52.92 1.92L19 10.4v3.18l1.86 1.48-.92 1.92-2.32-.54-2.49 1.98v2.38l-2.05.47-1.04-2.14-3.1-.71-1.86 1.49-1.68-1.34 1.05-2.13-1.37-2.86-2.33-.52v-2.12l2.33-.54 1.37-2.86zm-1.86-.43L4.8 7.55l-.76 1.57-2.78.65v4.5l2.79.61.75 1.56-1.26 2.55 3.54 2.84 2.23-1.79 1.7.39L12.25 23l4.37-1v-2.85l1.36-1.09 2.78.65 1.96-4.07-2.23-1.77v-1.74l2.24-1.75-1.95-4.06-2.79.62-1.37-1.1V2l-4.38-1L11 3.56l-1.7.4-2.24-1.78zm12.07 4.77L12.4 7.7 8.78 8.97 7.52 12.6l2.04 3.24 3.8.42 2.7-2.7zM9.16 12.4l.79-2.26 2.26-.8 2.02 1.28.28 2.38-1.7 1.7-2.37-.27z" />
                      </svg>
                    </div>
                    <span className="sc-f6e50073-4 gskSvq">
                      Mi Configuración
                    </span>
                    <svg
                      aria-hidden="true"
                      className="BaseSvg-sc-yh8lnd-0 ChevronIcon___StyledBaseSvg-sc-1y4em6t-0 ckLyyv sc-f6e50073-6 jMgmIb"
                      focusable="false"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      width="1.5em">
                      <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                    </svg>
                  </button>
                  <div className="sc-f6e50073-8 dTHzZi">
                    <ul className="UnstyledList-sc-ix96mm-0 ekOJfs" role="list">
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="manageAlerts"
                          href="https://my.ticketmaster.com.mx/settings/subscriptions?lang=es-mx">
                          <div className="sc-f6e50073-10 pXgit">
                            Administrar alertas
                          </div>
                        </a>
                      </li>
                      <li role="listitem">
                        <a
                          aria-current="false"
                          className="sc-5ff3f33f-1 jVrMWe sc-f6e50073-9 kPQGaj"
                          data-testid="managePreferences"
                          href="/member/edit_categories?tm_link=mytm_myacct_UpdateEventCategories">
                          <div className="sc-f6e50073-10 pXgit">
                            Cambiar Preferencias
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sc-592170a3-2 hJNfae">
                  <button className="sc-592170a3-3 byfNGD">
                    <svg
                      aria-hidden="true"
                      className="BaseSvg-sc-yh8lnd-0 ExitIcon___StyledBaseSvg-sc-1sra210-0 ckLyyv sc-592170a3-4 iqdTsX"
                      focusable="false"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      width="1.5em">
                      <path d="M15.13 1H1v22h10.98l3.15-3.23V15h-1.5v4.16l-2.29 2.34H2.5v-19h11.13V9h1.5zm3.4 6.47L23.06 12l-4.53 4.53-1.06-1.06 2.72-2.72H9v-1.5h11.19l-2.72-2.72z" />
                    </svg>
                    Cerrar sesión
                  </button>
                </div>
                <div className="sc-592170a3-2 sc-592170a3-5 hJNfae ivpuFw">
                  <button
                    aria-expanded="false"
                    className="sc-592170a3-3 sc-592170a3-6 byfNGD dERecM">
                    <svg
                      aria-hidden="true"
                      className="BaseSvg-sc-yh8lnd-0 QuestionMarkCutCornerIcon___StyledBaseSvg-sc-16zdarm-0 ckLyyv sc-592170a3-7 iUlGQI"
                      focusable="false"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      width="1.5em">
                      <path d="M12.25 8a1 1 0 0 1 .24.02q.27.04.58.17.3.12.48.35c.1.15.2.36.2.71 0 .67-.34 1.08-.92 1.79l-.04.05a4.7 4.7 0 0 0-1.29 3.16H13c0-.98.41-1.55.96-2.21q.05-.08.1-.14c.52-.62 1.19-1.43 1.19-2.65q-.02-.98-.5-1.6c-.31-.42-.7-.67-1.07-.84a4 4 0 0 0-1.38-.3l-.03-.01h-.01q0 0-.01 0h-.02a2 2 0 0 0-.14 0 4 4 0 0 0-1.43.4c-.4.2-.82.5-1.14.99q-.5.73-.52 1.86h1.5c0-.5.12-.81.26-1.03q.23-.32.58-.49a2 2 0 0 1 .9-.23zm-.75 7.5V17H13v-1.5z M1 1h22v16.31L17.31 23H1zm1.5 1.5v19h14.19l4.81-4.81V2.5z" />
                    </svg>
                    ¿Necesitas ayuda?
                  </button>
                </div>
              </nav>
            </div>
           <div className="sc-f59bc11-7 iMZEQs">
            <div className="sc-16cc196b-2 bzqpZc">
                <div>
                  {boletos.map((b) => (
                  <ul
                    key={b.id}
                    className="sc-7da77218-1 jvFlWE"
                    data-testid="nextEventSubcards">
                    <li className="sc-7da77218-2 dYaKNj">
                      <div className="sc-358b865f-0 jEpyAM" 
                      onClick={() => navigate(`/boleto-detalle/${b.id}`)}
                      style={{ cursor: "pointer" }}>
                        <a
                          aria-labelledby=":r3:"
                          className="sc-5ff3f33f-1 jVrMWe sc-358b865f-8 ewkKgd"
                          data-testid="event-image">
                          <img
                            aria-hidden="true"
                            className="sc-358b865f-10 jbpowU"
                            src={b.imagen}
                          />
                        </a>
                        <div className="sc-358b865f-1 fnBxtA">
                          <a
                            className="sc-5ff3f33f-1 jVrMWe sc-358b865f-2 kqPoDV"
                            id=":r3:">
                            <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                              Orden de compra #11-20307/MXC
                            </span>
                            <div className="sc-358b865f-14 eRdWed">
                              <h3
                                className="sc-358b865f-4 fNA-Dpw"
                                data-testid="upcomingEventTitle">
                                {b.nombre_evento}
                              </h3>
                              <p className="sc-358b865f-13 zSkso">
                                <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                                  <span>martes, 17 de marzo de 2026</span>
                                </span>
                               <span aria-hidden="true">
                                 {new Date(b.fecha_evento).toLocaleString("es-MX", {
                                   weekday: "short",
                                   day: "numeric",
                                   month: "short",
                                   year: "numeric",
                                   hour: "2-digit",
                                   minute: "2-digit"
                                 })}
                               </span>
                              </p>
                              <p className="sc-358b865f-9 hHmurx">
                                {b.lugar} - {b.ciudad}
                              </p>
                            </div>
                            <div className="sc-358b865f-7 LznMI">
                              <svg
                                aria-hidden="true"
                                className="BaseSvg-sc-yh8lnd-0 ChevronIcon___StyledBaseSvg-sc-1y4em6t-0 itirYM"
                                focusable="false"
                                height="1.5em"
                                rotate="-90"
                                viewBox="0 0 24 24"
                                width="1.5em">
                                <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                              </svg>
                              <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                                Ver boletos
                              </span>
                            </div>
                          </a>
                          <div className="sc-358b865f-5 jzBeFi">
                            <div className="sc-358b865f-3 ldWDEB" />
                            <div className="sc-358b865f-6 iJuHkD">
                              <a
                                className="sc-5ff3f33f-1 jVrMWe Link__StyledLink-sc-pudy0l-0 coVzbU sc-a4824edf-0 gZExrr"
                                href="/user/order/iDYQdeHvauF-_zerqvCmrBGntXhtkZkMJFSq4g%3D%3D/14006373AA99B2A3/smart-help">
                                <svg
                                  aria-hidden="true"
                                  className="BaseSvg-sc-yh8lnd-0 EnvelopeClosedIcon___StyledBaseSvg-sc-1uqjuak-0 ckLyyv"
                                  focusable="false"
                                  height="1.5em"
                                  viewBox="0 0 24 24"
                                  width="1.5em">
                                  <path d="M1 20.51h22v-17H1zM21.5 5.96V17l-6.17-5.6zm-7.31 6.44 6.87 6.24-9.07.15-9.03-.15 6.87-6.24L12 14.32zm-5.49-.99-6.2 5.63V5.93zm11.59-6.39-8.28 7.3-8.27-7.3z" />
                                </svg>
                                ¿Necesitas ayuda con esta compra?
                                <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                                  about Order #11-20307/MXC for event Martes
                                  Populares de Lucha Libre CMLL
                                </span>
                              </a>
                              <span
                                className="sc-358b865f-12 ksSXyr"
                                data-testid="orderReference">
                                Orden de compra {b.orden_id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="sc-e39c8cc5-2 fIKYse">
          <footer
            aria-label="Footer de navegación Ticketmaster"
            className="sc-f4c610f3-1 eYKTRw">
            <div className="sc-f4c610f3-2 fWONLq">
              <div className="sc-f4c610f3-3 iEIDXO">
                <div className="sc-f4c610f3-4 fHsfXe">
                  <svg
                    aria-hidden="true"
                    className="sc-f4c610f3-0 dIxNSw"
                    fill="#fff"
                    height="100%"
                    viewBox="0 0 135 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.57 6.27c-4.02 0-6.97 3.63-6.97 7.4 0 3.62 2.38 5.32 5.9 5.32 1.3 0 2.66-.3 3.9-.68l.4-2.5a8.98 8.98 0 0 1-3.75.86c-2.04 0-3.23-.71-3.39-2.62l-.02-.34v-.1a6.46 6.46 0 0 1 .52-2.41c.61-1.55 1.48-2.62 3.36-2.62 1.33 0 2.02.73 2.02 2.03 0 .28-.02.54-.07.83H39.1a7.57 7.57 0 0 0-.34 2.17h7.5c.2-.9.32-1.8.32-2.72 0-3.09-2-4.62-5.02-4.62zm-5.4.28h-4.15l-4.44 4.41h-.05L29.65 1h-3.19l-3.78 17.7h3.11l1.38-6.44h.05l3.16 6.45h3.6l-3.7-6.62 5.88-5.54zm15.16 8.8a5 5 0 0 1 .15-1.18l1.16-5.3h2.86l.5-2.32h-2.86l.79-3.61-3.42 1.1-.55 2.5h-2.3l-.51 2.32h2.3l-.9 4.11c-.2.97-.4 1.89-.4 2.83 0 2.34 1.52 3.2 3.69 3.2.54 0 1.16-.18 1.7-.3l.56-2.45a4.28 4.28 0 0 1-1.55.28c-.72 0-1.22-.44-1.22-1.18zm-47.14 0c0-.47.07-.9.14-1.18l1.16-5.3h2.86l.5-2.32H5.99l.79-3.61-3.43 1.1-.54 2.5H.5L0 8.87h2.3l-.9 4.11c-.21.97-.4 1.89-.4 2.83C1 18.14 2.52 19 4.69 19c.54 0 1.16-.18 1.7-.3l.56-2.45a4.27 4.27 0 0 1-1.55.28c-.71 0-1.22-.44-1.22-1.18zm12.48-1.98c0-2.29 1.42-4.65 3.97-4.65.88 0 1.7.21 2.33.62l.78-2.6a11.4 11.4 0 0 0-3.19-.47c-4.4 0-7.22 3.23-7.22 7.48 0 3.14 2.04 5.24 5.2 5.24 1.05 0 2.1-.1 3.07-.57l.36-2.5c-.83.4-1.81.61-2.6.61-2.18 0-2.7-1.58-2.7-3.16zM14.5 1.31h-3.19l-.67 3.02h3.2l.66-3.02zm-4.36 5.24L7.54 18.7h3.19l2.61-12.16h-3.19zm72.06-.27c-1.43 0-2.81.26-4.17.73l-.45 2.53a9.48 9.48 0 0 1 4.02-.95c1.12 0 2.45.35 2.45 1.58 0 .36 0 .71-.1 1.04h-1.11c-3 0-7.52.3-7.52 4.32 0 2.24 1.57 3.47 3.78 3.47 1.76 0 2.86-.78 3.95-2.15h.05l-.33 1.87h2.68c.29-2.3 1.5-7.06 1.5-8.7 0-2.85-2.3-3.74-4.75-3.74zM80 16.68c-.82 0-1.62-.42-1.62-1.27 0-2.05 2.56-2.31 4.1-2.31h1.13c-.5 1.96-1.24 3.58-3.61 3.58zM71.6 6.27c-1.72 0-3.5.73-4.31 2.31h-.05c-.17-1.47-1.67-2.31-3.12-2.31-1.5 0-2.9.66-3.75 1.9h-.05l.29-1.62h-2.98l-.26 1.35-2.23 10.8h3.18l1.26-5.78c.4-1.63 1-4.2 3.16-4.2.82 0 1.5.57 1.5 1.46 0 .74-.23 1.87-.4 2.6l-1.28 5.93h3.18L67 12.92c.4-1.65.95-4.2 3.17-4.2.8 0 1.5.57 1.5 1.46 0 .74-.24 1.87-.4 2.6l-1.3 5.93h3.2l1.27-5.81c.27-1 .55-2.22.55-3.3a3.4 3.4 0 0 0-3.4-3.33zm41.24 0c-4.02 0-6.97 3.63-6.97 7.4 0 3.62 2.38 5.32 5.9 5.32 1.3 0 2.66-.3 3.9-.68l.4-2.5a9 9 0 0 1-3.75.86c-2.04 0-3.23-.71-3.38-2.62-.01-.12-.03-.22-.03-.34v-.1c.02-.84.2-1.66.53-2.41.6-1.55 1.47-2.62 3.35-2.62 1.33 0 2.02.73 2.02 2.03 0 .28-.02.54-.07.83h-4.36a7.57 7.57 0 0 0-.34 2.17h7.5c.2-.9.32-1.8.32-2.72 0-3.09-2-4.62-5.02-4.62zm10.18 2.57h-.05l.43-2.3h-3.05l-.28 1.64-2.19 10.53h3.19l1.14-5.46c.4-1.96 1.5-3.96 3.76-3.96.4 0 .85.07 1.2.19l.68-3.1a4.9 4.9 0 0 0-1.22-.11c-1.47 0-3.04 1.25-3.61 2.57zm-20.87 6.51c0-.47.07-.9.14-1.18l1.17-5.3h2.85l.5-2.32h-2.85l.78-3.61-3.42 1.1-.55 2.5h-2.3l-.5 2.32h2.3l-.9 4.11c-.22.97-.4 1.89-.4 2.83 0 2.34 1.52 3.2 3.68 3.2.55 0 1.17-.18 1.71-.3l.55-2.45c-.4.17-.98.28-1.55.28-.71 0-1.21-.44-1.21-1.18zm-13.31-5.21c0 3.04 4.13 3.23 4.13 5.2 0 .98-1.12 1.33-2.19 1.33a6.01 6.01 0 0 1-3.04-.94l-.7 2.53a8.8 8.8 0 0 0 3.74.73c2.74 0 5.52-.95 5.52-4.1 0-2.98-4.14-3.55-4.14-5.08 0-.97 1.19-1.23 2.14-1.23.9 0 1.79.26 2.13.44l.69-2.38a13.27 13.27 0 0 0-2.98-.37c-2.53 0-5.3 1.01-5.3 3.87zm43.23-3.86A2.74 2.74 0 0 0 129.33 9c0 1.5 1.23 2.72 2.74 2.72A2.73 2.73 0 0 0 134.81 9c0-1.5-1.23-2.72-2.74-2.72zm.01 5.04A2.23 2.23 0 0 1 129.86 9c0-1.3.95-2.31 2.22-2.31 1.26 0 2.21 1.01 2.21 2.31s-.95 2.32-2.2 2.32zm1.28-3.02c0-.6-.36-.9-1.1-.9h-1.23v3.2h.52V9.17h.44l.9 1.41h.55l-.91-1.4c.5 0 .83-.38.83-.89zm-1.81.48V7.8h.62c.34 0 .66.1.66.47 0 .41-.26.5-.66.5h-.62z" />
                  </svg>
                  <span className="VisuallyHidden-sc-8buqks-0 lmhoCy">
                    Logo de Ticketmaster
                  </span>
                  <div className="sc-c4c5473a-0 deFcRM">
                    <h2 className="sc-c4c5473a-1 iaZTnU">
                      Vamos a conectarnos
                    </h2>
                    <ul
                      className="UnstyledList-sc-ix96mm-0 sc-c4c5473a-2 ekOJfs gzvJBA"
                      role="list">
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://www.facebook.com/TicketmasterMexico/"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Facebook"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/facebook.svg"
                            title="Facebook"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://twitter.com/ticketmaster_Me"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="X"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/x.svg"
                            title="X"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://www.instagram.com/ticketmaster_mx/"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Instagram"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/instagram.svg"
                            title="Instagram"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://www.youtube.com/user/TicketmasterMexico"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Youtube"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/youtube.svg"
                            title="Youtube"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://www.tiktok.com/@ticketmaster_mx"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="TikTok"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/tiktok.svg"
                            title="TikTok"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://blog.ticketmaster.com.mx"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Blog"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/blog.svg"
                            title="Blog"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://open.spotify.com/user/ma5gn0sy1gqyq9cwcpn4p46nb?si=f1ef5cc777114974"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Spotify"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/spotify.svg"
                            title="Spotify"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://www.linkedin.com/company/ticketmaster-mexico/"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="LinkedIn"
                            className="sc-c4c5473a-5 juJoTL"
                            src="//uk.tmconst.com/rc-51677358/images/logo/linkedin.svg"
                            title="LinkedIn"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sc-c4c5473a-0 deFcRM">
                    <h2 className="sc-c4c5473a-1 iaZTnU">
                      Descargue nuestras aplicaciones
                    </h2>
                    <ul
                      className="UnstyledList-sc-ix96mm-0 sc-c4c5473a-2 ekOJfs gzvJBA"
                      role="list">
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://apps.apple.com/mx/app/ticketmaster-buy-sell-tickets/id500003565"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Consíguelo en el App Store"
                            className="sc-c4c5473a-5 juJoRi"
                            src="//uk.tmconst.com/rc-51677358/images/logo/apple-store/es.svg"
                            title="Consíguelo en el App Store"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                      <li className="sc-c4c5473a-3 bWWRKI" role="listitem">
                        <a
                          className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-c4c5473a-4 cRUewE"
                          href="https://play.google.com/store/apps/details?id=com.ticketmaster.mobile.android.na&pli=1"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img
                            alt="Disponible en Google Play"
                            className="sc-c4c5473a-5 juJoRi"
                            src="//uk.tmconst.com/rc-51677358/images/logo/google-store/es.svg"
                            title="Disponible en Google Play"
                          />
                          <span className="VisuallyHidden-sc-8buqks-0 sc-9ee55a92-0 lmhoCy bScnHS">
                            (Abre una nueva pestaña)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="sc-933023be-0 kOntPy">
                    Al continuar en esta página, usted acuerda regirse por
                    nuestros
                    <a
                      className="sc-933023be-1 hoFFTv"
                      href="https://help.ticketmaster.com.mx/hc/es-mx/articles/12682192759825-Condiciones-de-Uso">
                      Términos de uso.
                    </a>
                  </p>
                  <div id="teconsent" />
                </div>
                <div className="sc-f4c610f3-5 dEiaEi">
                  <div className="sc-b4831734-0 dyfQMZ">
                    <div className="sc-b4831734-1 gbztF">
                      <h2 className="sc-b4831734-2 cWJMZP">Ayuda</h2>
                      <div className="sc-b4831734-5 kOkNnx">
                        <ul
                          className="UnstyledList-sc-ix96mm-0 sc-b4831734-6 ekOJfs fOnNgU"
                          data-testid="footer-link-content"
                          role="list">
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://help.ticketmaster.com.mx/hc/es-mx">
                              Centro de Ayuda
                            </a>
                          </li>
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://help.ticketmaster.com.mx/hc/es-mx/articles/7003373287569--Como-contactarnos-">
                              Contáctanos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sc-b4831734-1 gbztF">
                      <h2 className="sc-b4831734-2 cWJMZP">Nuestra red</h2>
                      <div className="sc-b4831734-5 kOkNnx">
                        <ul
                          className="UnstyledList-sc-ix96mm-0 sc-b4831734-6 ekOJfs fOnNgU"
                          data-testid="footer-link-content"
                          role="list">
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://www.cie.com.mx/">
                              CIE
                            </a>
                          </li>
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://www.ocesa.com.mx/nosotros">
                              OCESA
                            </a>
                          </li>
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://www.livenation.lat/">
                              Live Nation
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sc-b4831734-1 gbztF">
                      <h2 className="sc-b4831734-2 cWJMZP">
                        Estamos para ayudarte
                      </h2>
                      <div className="sc-b4831734-5 kOkNnx">
                        <ul
                          className="UnstyledList-sc-ix96mm-0 sc-b4831734-6 ekOJfs fOnNgU"
                          data-testid="footer-link-content"
                          role="list">
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://my.ticketmaster.com.mx/settings">
                              Mi cuenta
                            </a>
                          </li>
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://help.ticketmaster.com.mx/hc/es-mx/articles/6121565057553-Pol%C3%ADtica-de-compra-y-cancelaci%C3%B3n-48hrs-">
                              Política de reembolso y cancelación
                            </a>
                          </li>
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="http://solicitudes.ticketmaster.com.mx/facturacion/">
                              Facturación
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sc-b4831734-1 gbztF">
                      <h2 className="sc-b4831734-2 cWJMZP">Únete</h2>
                      <div className="sc-b4831734-5 kOkNnx">
                        <ul
                          className="UnstyledList-sc-ix96mm-0 sc-b4831734-6 ekOJfs fOnNgU"
                          data-testid="footer-link-content"
                          role="list">
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://business.ticketmaster.com.mx/work-with-us/">
                              Vende tu evento con nosotros
                            </a>
                          </li>
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="http://tmespeciales.ticketmaster.com.mx/empleos/">
                              Trabaja con nosotros
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sc-b4831734-1 gbztF">
                      <h2 className="sc-b4831734-2 cWJMZP">Empresa</h2>
                      <div className="sc-b4831734-5 kOkNnx">
                        <ul
                          className="UnstyledList-sc-ix96mm-0 sc-b4831734-6 ekOJfs fOnNgU"
                          data-testid="footer-link-content"
                          role="list">
                          <li role="listitem">
                            <a
                              className="sc-b4831734-7 gykDUA"
                              href="https://business.ticketmaster.com.mx/">
                              Quiénes somos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-4270d8a3-0 gCHgre">
              <hr className="sc-4270d8a3-1 hVPUuP" />
              <ul
                className="UnstyledList-sc-ix96mm-0 sc-53fdd771-0 ekOJfs vWQuT sc-4270d8a3-2 cXKcrU"
                role="list">
                <li className="sc-53fdd771-1 csdazz" role="listitem">
                  <a
                    className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-53fdd771-2 gJQudl"
                    href="https://help.ticketmaster.com.mx/hc/es-mx/articles/6120032009745-Pol%C3%ADtica-de-compra">
                    Política de Compra
                  </a>
                </li>
                <li className="sc-53fdd771-1 csdazz" role="listitem">
                  <a
                    className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-53fdd771-2 gJQudl"
                    href="https://privacy.ticketmaster.com.mx/es/privacy-policy">
                    Aviso de Privacidad
                  </a>
                </li>
                <li className="sc-53fdd771-1 csdazz" role="listitem">
                  <a
                    className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-53fdd771-2 gJQudl"
                    href="https://privacy.ticketmaster.com.mx/es/cookie-policy">
                    Política de Cookies
                  </a>
                </li>
                <li className="sc-53fdd771-1 csdazz" role="listitem">
                  <a
                    className="Link__StyledLink-sc-pudy0l-0 coVzbU sc-53fdd771-2 gJQudl"
                    href="https://help.ticketmaster.com.mx/hc/es-mx/articles/12682738337041-Compromisos-con-COFECE">
                    Compromisos con COFECE
                  </a>
                </li>
                <li className="sc-53fdd771-1 csdazz" role="listitem">
                  <button className="sc-53fdd771-2 sc-53fdd771-3 gJQudl fPkPmX">
                    Administrar mis cookies
                  </button>
                </li>
              </ul>
              <p className="sc-b40ad97a-0 dxxQgC sc-4270d8a3-3 gBuJcq">
                © 1999-2026 Ticketmaster. Todos los derechos reservados.
              </p>
              <span
                className="ot-sdk-show-settings"
                style={{
                  display: "none",
                }}>
                Preferencias de cookies
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <div data-testid="modals" id="modals" />
    <next-route-announcer>
      <p
        aria-live="assertive"
        id="__next-route-announcer__"
        role="alert"
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          overflowWrap: "normal",
          padding: "0px",
          position: "absolute",
          top: "0px",
          whiteSpace: "nowrap",
          width: "1px",
        }}
      />
    </next-route-announcer>
    <div>
      <div
        className="grecaptcha-badge"
        data-style="bottomright"
        style={{
          borderRadius: "2px",
          bottom: "14px",
          boxShadow: "gray 0px 0px 5px",
          display: "block",
          height: "60px",
          overflow: "hidden",
          position: "fixed",
          right: "-186px",
          transition: "right 0.3s",
          width: "256px",
        }}>
        <div className="grecaptcha-logo"></div>
        <div className="grecaptcha-error" />
        <textarea
          className="g-recaptcha-response"
          id="g-recaptcha-response-100000"
          name="g-recaptcha-response"
          style={{
            border: "1px solid rgb(193, 193, 193)",
            display: "none",
            height: "40px",
            margin: "10px 25px",
            padding: "0px",
            resize: "none",
            width: "250px",
          }}
        />
      </div>
    </div>
    <div
      style={{
        display: "none",
        visibility: "hidden",
      }}></div>
    <div data-nosnippet="true" id="onetrust-consent-sdk">
      <div className="onetrust-pc-dark-filter ot-hide ot-fade-in" />
      <div
        aria-label="Centro de preferencias"
        className="otPcTab ot-hide ot-fade-in"
        id="onetrust-pc-sdk"
        lang="es"
        role="region">
        <div
          aria-label="Centro de preferencia de la privacidad"
          aria-modal="true"
          role="dialog"
          style={{
            height: "100%",
          }}>
          <div className="ot-pc-header" role="presentation">
            <div className="ot-pc-logo">
              <img
                alt="Logotipo de la empresa"
                src="https://cdn.cookielaw.org/logos/ba6f9c5b-dda5-43bd-bac4-4e06afccd928/002b248b-6e0e-44fd-8cb6-320ffefa48fe/e5b998c1-73c7-46e8-a7ff-aa2ea18369bf/Ticketmaster-Logo-Azure_without_R.png"
              />
            </div>
            <div className="ot-title-cntr">
              <h2
                aria-hidden="false"
                id="ot-pc-title"
                title="Centro de preferencia de la privacidad">
                Centro de preferencia de la privacidad
              </h2>
              <div className="ot-close-cntr">
                <button
                  aria-label="Cerrar centro de preferencias"
                  className="ot-close-icon"
                  id="close-pc-btn-handler"
                  style={{
                    backgroundImage:
                      'url("https://cdn.cookielaw.org/logos/static/ot_close.svg")',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="ot-pc-scrollbar ot-sdk-row" id="ot-pc-content">
            <div className="ot-optout-signal ot-hide">
              <div className="ot-optout-icon">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="ot-floating-button__svg-fill"
                    d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span />
            </div>
            <div className="ot-sdk-container ot-grps-cntr ot-sdk-column">
              <div
                aria-label="Categorías de cookies"
                className="ot-sdk-four ot-sdk-columns ot-tab-list"
                role="navigation">
                <h2 aria-hidden="true" id="ot-pc-title-mobile">
                  Centro de preferencia de la privacidad
                </h2>
                <ul
                  aria-orientation="vertical"
                  className="ot-cat-grp"
                  role="tablist">
                  <li className="ot-abt-tab" role="presentation">
                    <div
                      aria-controls="ot-tab-desc"
                      aria-selected="true"
                      className="ot-active-menu category-menu-switch-handler"
                      role="tab"
                      tabIndex="0">
                      <h3 id="ot-pvcy-txt">Su privacidad</h3>
                    </div>
                  </li>
                  <li
                    className="ot-cat-item ot-always-active-group ot-vs-config"
                    data-optanongroupid="C0001"
                    role="presentation">
                    <div
                      aria-controls="ot-desc-id-C0001"
                      aria-selected="false"
                      className="category-menu-switch-handler"
                      role="tab"
                      tabIndex="-1">
                      <h3 id="ot-header-id-C0001">
                        Cookies estrictamente necesarias
                      </h3>
                    </div>
                  </li>
                  <li
                    className="ot-cat-item ot-vs-config"
                    data-optanongroupid="C0003"
                    role="presentation">
                    <div
                      aria-controls="ot-desc-id-C0003"
                      aria-selected="false"
                      className="category-menu-switch-handler"
                      role="tab"
                      tabIndex="-1">
                      <h3 id="ot-header-id-C0003">Cookies de funcionalidad</h3>
                    </div>
                  </li>
                  <li
                    className="ot-cat-item ot-vs-config"
                    data-optanongroupid="C0002"
                    role="presentation">
                    <div
                      aria-controls="ot-desc-id-C0002"
                      aria-selected="false"
                      className="category-menu-switch-handler"
                      role="tab"
                      tabIndex="-1">
                      <h3 id="ot-header-id-C0002">Cookies de rendimiento</h3>
                    </div>
                  </li>
                  <li
                    className="ot-cat-item ot-vs-config"
                    data-optanongroupid="C0004"
                    role="presentation">
                    <div
                      aria-controls="ot-desc-id-C0004"
                      aria-selected="false"
                      className="category-menu-switch-handler"
                      role="tab"
                      tabIndex="-1">
                      <h3 id="ot-header-id-C0004">Cookies dirigidas</h3>
                    </div>
                  </li>
                  <li
                    className="ot-cat-item ot-vs-config"
                    data-optanongroupid="C0005"
                    role="presentation">
                    <div
                      aria-controls="ot-desc-id-C0005"
                      aria-selected="false"
                      className="category-menu-switch-handler"
                      role="tab"
                      tabIndex="-1">
                      <h3 id="ot-header-id-C0005">Cookies de redes sociales</h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ot-tab-desc ot-sdk-eight ot-sdk-columns">
                <div
                  aria-labelledby="ot-pvcy-hdr"
                  className="ot-desc-cntr"
                  id="ot-tab-desc"
                  role="tabpanel"
                  tabIndex="0">
                  <h4 id="ot-pvcy-hdr">Su privacidad</h4>
                  <p className="ot-grp-desc" id="ot-pc-desc">
                    Cuando visita cualquier sitio web, el mismo podría obtener o
                    guardar información en su navegador, generalmente mediante
                    el uso de cookies. Esta información puede ser acerca de
                    usted, sus preferencias o su dispositivo, y se usa
                    principalmente para que el sitio funcione según lo esperado.
                    Por lo general, la información no lo identifica
                    directamente, pero puede proporcionarle una experiencia web
                    más personalizada. Ya que respetamos su derecho a la
                    privacidad, usted puede escoger no permitirnos usar ciertas
                    cookies. Haga clic en los encabezados de cada categoría para
                    saber más y cambiar nuestras configuraciones
                    predeterminadas. Sin embargo, el bloqueo de algunos tipos de
                    cookies puede afectar su experiencia en el sitio y los
                    servicios que podemos ofrecer. <br />
                    <a
                      aria-label="Más información sobre su privacidad, se abre en una nueva pestaña"
                      className="privacy-notice-link"
                      href="https://cookiepedia.co.uk/giving-consent-to-cookies"
                      rel="noopener noreferrer"
                      target="_blank">
                      Más información
                    </a>
                  </p>
                </div>
                <div
                  className="ot-desc-cntr ot-hide ot-always-active-group"
                  id="ot-desc-id-C0001"
                  role="tabpanel"
                  tabIndex="0">
                  <div className="ot-grp-hdr1">
                    <h4 className="ot-cat-header">
                      Cookies estrictamente necesarias
                    </h4>
                    <div className="ot-tgl-cntr">
                      <div className="ot-always-active">Activas siempre</div>
                    </div>
                  </div>
                  <p className="ot-grp-desc ot-category-desc">
                    Estas cookies son necesarias para que el sitio web funcione
                    y no se pueden desactivar en nuestros sistemas. Usualmente
                    están configuradas para responder a acciones hechas por
                    usted para recibir servicios, tales como ajustar sus
                    preferencias de privacidad, iniciar sesión en el sitio, o
                    llenar formularios. Usted puede configurar su navegador para
                    bloquear o alertar la presencia de estas cookies, pero
                    algunas partes del sitio web no funcionarán. Estas cookies
                    no guardan ninguna información personal identificable.
                  </p>
                  <div className="ot-hlst-cntr">
                    <button
                      aria-label="Cookies estrictamente necesarias - El botón Detalles de cookies abre el menú Lista de cookies"
                      className="ot-link-btn category-host-list-handler"
                      data-parent-id="C0001"
                      dir="ltr">
                      Información de las cookies
                    </button>
                  </div>
                </div>
                <div
                  className="ot-desc-cntr ot-hide"
                  id="ot-desc-id-C0003"
                  role="tabpanel"
                  tabIndex="0">
                  <div className="ot-grp-hdr1">
                    <h4 className="ot-cat-header">Cookies de funcionalidad</h4>
                    <div className="ot-tgl">
                      <input
                        aria-labelledby="ot-header-id-C0003"
                        className="category-switch-handler"
                        data-optanongroupid="C0003"
                        defaultChecked
                        id="ot-group-id-C0003"
                        name="ot-group-id-C0003"
                        type="checkbox"
                      />
                      <label className="ot-switch" htmlFor="ot-group-id-C0003">
                        <span className="ot-switch-nob" />
                        <span className="ot-label-txt">
                          Cookies de funcionalidad
                        </span>
                      </label>
                    </div>
                    <div className="ot-tgl-cntr" />
                  </div>
                  <p className="ot-grp-desc ot-category-desc">
                    Estas cookies permiten que el sitio ofrezca una mejor
                    funcionalidad y personalización. Pueden ser establecidas por
                    nosotros o por terceras partes cuyos servicios hemos
                    agregado a nuestras páginas. Si no permite estas cookies
                    algunos de nuestros servicios no funcionarán correctamente.
                  </p>
                  <div className="ot-hlst-cntr">
                    <button
                      aria-label="Cookies de funcionalidad - El botón Detalles de cookies abre el menú Lista de cookies"
                      className="ot-link-btn category-host-list-handler"
                      data-parent-id="C0003"
                      dir="ltr">
                      Información de las cookies
                    </button>
                  </div>
                </div>
                <div
                  className="ot-desc-cntr ot-hide"
                  id="ot-desc-id-C0002"
                  role="tabpanel"
                  tabIndex="0">
                  <div className="ot-grp-hdr1">
                    <h4 className="ot-cat-header">Cookies de rendimiento</h4>
                    <div className="ot-tgl">
                      <input
                        aria-labelledby="ot-header-id-C0002"
                        className="category-switch-handler"
                        data-optanongroupid="C0002"
                        defaultChecked
                        id="ot-group-id-C0002"
                        name="ot-group-id-C0002"
                        type="checkbox"
                      />
                      <label className="ot-switch" htmlFor="ot-group-id-C0002">
                        <span className="ot-switch-nob" />
                        <span className="ot-label-txt">
                          Cookies de rendimiento
                        </span>
                      </label>
                    </div>
                    <div className="ot-tgl-cntr" />
                  </div>
                  <p className="ot-grp-desc ot-category-desc">
                    Estas cookies nos permiten contar las visitas y fuentes de
                    circulación para poder medir y mejorar el desempeño de
                    nuestro sitio. Nos ayudan a saber qué páginas son las más o
                    menos populares, y ver cuántas personas visitan el sitio.
                    Toda la información que recogen estas cookies es agregada y,
                    por lo tanto, anónima. Si no permite estas cookies no
                    sabremos cuándo visitó nuestro sitio, y por lo tanto no
                    podremos saber cuándo lo visitó.
                  </p>
                  <div className="ot-hlst-cntr">
                    <button
                      aria-label="Cookies de rendimiento - El botón Detalles de cookies abre el menú Lista de cookies"
                      className="ot-link-btn category-host-list-handler"
                      data-parent-id="C0002"
                      dir="ltr">
                      Información de las cookies
                    </button>
                  </div>
                </div>
                <div
                  className="ot-desc-cntr ot-hide"
                  id="ot-desc-id-C0004"
                  role="tabpanel"
                  tabIndex="0">
                  <div className="ot-grp-hdr1">
                    <h4 className="ot-cat-header">Cookies dirigidas</h4>
                    <div className="ot-tgl">
                      <input
                        aria-labelledby="ot-header-id-C0004"
                        className="category-switch-handler"
                        data-optanongroupid="C0004"
                        defaultChecked
                        id="ot-group-id-C0004"
                        name="ot-group-id-C0004"
                        type="checkbox"
                      />
                      <label className="ot-switch" htmlFor="ot-group-id-C0004">
                        <span className="ot-switch-nob" />
                        <span className="ot-label-txt">Cookies dirigidas</span>
                      </label>
                    </div>
                    <div className="ot-tgl-cntr" />
                  </div>
                  <p className="ot-grp-desc ot-category-desc">
                    Estas cookies pueden estar en todo el sitio web, colocadas
                    por nuestros socios publicitarios. Estos negocios pueden
                    utilizarlas para crear un perfil de sus intereses y
                    mostrarle anuncios relevantes en otros sitios. No almacenan
                    información personal directamente, sino que se basan en la
                    identificación única de su navegador y dispositivo de acceso
                    al Internet. Si no permite estas cookies, tendrá menos
                    publicidad dirigida.
                  </p>
                  <div className="ot-hlst-cntr">
                    <button
                      aria-label="Cookies dirigidas - El botón Detalles de cookies abre el menú Lista de cookies"
                      className="ot-link-btn category-host-list-handler"
                      data-parent-id="C0004"
                      dir="ltr">
                      Información de las cookies
                    </button>
                  </div>
                </div>
                <div
                  className="ot-desc-cntr ot-hide"
                  id="ot-desc-id-C0005"
                  role="tabpanel"
                  tabIndex="0">
                  <div className="ot-grp-hdr1">
                    <h4 className="ot-cat-header">Cookies de redes sociales</h4>
                    <div className="ot-tgl">
                      <input
                        aria-labelledby="ot-header-id-C0005"
                        className="category-switch-handler"
                        data-optanongroupid="C0005"
                        defaultChecked
                        id="ot-group-id-C0005"
                        name="ot-group-id-C0005"
                        type="checkbox"
                      />
                      <label className="ot-switch" htmlFor="ot-group-id-C0005">
                        <span className="ot-switch-nob" />
                        <span className="ot-label-txt">
                          Cookies de redes sociales
                        </span>
                      </label>
                    </div>
                    <div className="ot-tgl-cntr" />
                  </div>
                  <p className="ot-grp-desc ot-category-desc">
                    Estas cookies están configuradas por una serie de servicios
                    de redes sociales que hemos agregado al sitio para
                    permitirle compartir nuestro contenido con sus amigos y
                    redes. Son capaces de hacerle seguimiento a su navegador a
                    través de otros sitios y crear un perfil de sus intereses.
                    Esto podrá modificar el contenido y los mensajes que
                    encuentra en otras páginas web que visita. Si no permite
                    estas cookies no podrá ver o usar estas herramientas para
                    compartir.
                  </p>
                  <div className="ot-hlst-cntr">
                    <button
                      aria-label="Cookies de redes sociales - El botón Detalles de cookies abre el menú Lista de cookies"
                      className="ot-link-btn category-host-list-handler"
                      data-parent-id="C0005"
                      dir="ltr">
                      Información de las cookies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section
            className="ot-hide ot-pc-scrollbar ot-enbl-chr"
            id="ot-pc-lst">
            <div className="ot-lst-cntr ot-pc-scrollbar">
              <div id="ot-pc-hdr">
                <div id="ot-lst-title">
                  <button
                    aria-label="Back"
                    className="ot-link-btn back-btn-handler">
                    <svg
                      id="ot-back-arw"
                      viewBox="0 0 444.531 444.531"
                      x="0px"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      y="0px">
                      <title>Back Button</title>
                      <g>
                        <path
                          d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835                  l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425                  c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564                  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978                  L213.13,222.409z"
                          fill="#656565"
                        />
                      </g>
                    </svg>
                  </button>
                  <h3>Lista de cookies</h3>
                </div>
                <div className="ot-lst-subhdr">
                  <div id="ot-search-cntr">
                    <p className="ot-scrn-rdr" role="status" />
                    <input
                      aria-label="Búsqueda en la lista de cookies"
                      id="vendor-search-handler"
                      name="vendor-search-handler"
                      placeholder="Buscar..."
                      type="text"
                    />
                    <svg
                      aria-hidden="true"
                      viewBox="0 -30 110 110"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      y="0px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23              s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92              c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17              s-17-7.626-17-17S14.61,6,23.984,6z"
                        fill="#2e3644"
                      />
                    </svg>
                  </div>
                  <div id="ot-fltr-cntr">
                    <button
                      aria-expanded="false"
                      aria-haspopup="true"
                      aria-label="Filtrar Lista de cookies"
                      id="filter-btn-handler">
                      <svg
                        aria-hidden="true"
                        role="presentation"
                        viewBox="0 0 402.577 402.577"
                        x="0px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        y="0px">
                        <title>Filter Button</title>
                        <g>
                          <path
                            d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136                            c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083                            c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413                            C402.765,25.895,404.093,19.231,400.858,11.427z"
                            fill="#2c3643"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <section className="ot-pc-scrollbar" id="ot-lst-cnt">
                <div className="ot-sdk-row">
                  <div className="ot-sdk-column">
                    <div id="ot-sel-blk">
                      <div className="ot-sel-all">
                        <div className="ot-sel-all-hdr">
                          <span className="ot-consent-hdr">Consent</span>
                          <span className="ot-li-hdr">Leg.Interest</span>
                        </div>
                        <div className="ot-sel-all-chkbox">
                          <div className="ot-chkbox" id="ot-selall-hostcntr">
                            <input
                              id="select-all-hosts-groups-handler"
                              type="checkbox"
                            />
                            <label htmlFor="select-all-hosts-groups-handler">
                              <span className="ot-label-txt">
                                checkbox label
                              </span>
                            </label>
                            <span className="ot-label-status">label</span>
                          </div>
                          <div className="ot-chkbox" id="ot-selall-vencntr">
                            <input
                              id="select-all-vendor-groups-handler"
                              type="checkbox"
                            />
                            <label htmlFor="select-all-vendor-groups-handler">
                              <span className="ot-label-txt">
                                checkbox label
                              </span>
                            </label>
                            <span className="ot-label-status">label</span>
                          </div>
                          <div className="ot-chkbox" id="ot-selall-licntr">
                            <input
                              id="select-all-vendor-leg-handler"
                              type="checkbox"
                            />
                            <label htmlFor="select-all-vendor-leg-handler">
                              <span className="ot-label-txt">
                                checkbox label
                              </span>
                            </label>
                            <span className="ot-label-status">label</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul id="ot-host-lst" />
                  </div>
                </div>
              </section>
            </div>
            <div id="ot-anchor" />
            <section id="ot-fltr-modal">
              <div id="ot-fltr-cnt">
                <div id="ot-filter-list-header" />
                <button id="clear-filters-handler">Clear</button>
                <div
                  aria-labelledby="ot-filter-list-header"
                  className="ot-fltr-scrlcnt ot-pc-scrollbar"
                  role="group">
                  <ul className="ot-fltr-opts">
                    <li className="ot-fltr-opt">
                      <div className="ot-chkbox">
                        <input
                          className="category-filter-handler"
                          id="chkbox-id"
                          type="checkbox"
                        />
                        <label htmlFor="chkbox-id">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                    </li>
                  </ul>
                  <div className="ot-fltr-btns">
                    <button id="filter-apply-handler">Apply</button>
                    <button id="filter-cancel-handler">Cancel</button>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <div className="ot-pc-footer ot-pc-scrollbar">
            <div className="ot-btn-container">
              <button
                className="save-preference-btn-handler onetrust-close-btn-handler"
                ot-button-order="0">
                Confirmar mis preferencias
              </button>
              <div className="ot-btn-subcntr">
                <button
                  className="ot-pc-refuse-all-handler"
                  ot-button-order="1">
                  Rechazarlas todas
                </button>
                <button id="accept-recommended-btn-handler" ot-button-order="2">
                  Permitirlas todas
                </button>
              </div>
            </div>
            <div className="ot-pc-footer-logo">
              <a
                aria-label="Powered by OneTrust Se abre en una nueva pestaña"
                href="https://www.onetrust.com/products/cookie-consent/"
                rel="noopener noreferrer"
                target="_blank">
                <img
                  alt="Powered by Onetrust"
                  src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg"
                  title="Powered by OneTrust Se abre en una nueva pestaña"
                />
              </a>
            </div>
          </div>
          <span aria-atomic="true" aria-live="polite" className="ot-scrn-rdr" />
        </div>
      </div>
    </div>
    <div
      style={{
        display: "none",
      }}>
      <img
        alt=""
        aria-hidden="true"
        height="0"
        src="https://nova.collect.igodigital.com/c2/523000091/track_page_view?payload=%7B%22title%22%3A%22Ticketmaster%20-%20Mis%20boletos%22%2C%22url%22%3A%22https%3A%2F%2Fwww.ticketmaster.com.mx%2Fuser%2Forders%22%2C%22referrer%22%3A%22https%3A%2F%2Fwww.ticketmaster.com.mx%2Fccxp-mexico-boletos%2Fartist%2F3089950%3Futm_source%3DOCESA-performance-max%26utm_medium%3Ddisplay_paid%26utm_campaign%3Dco%253AMX%2520%257C%2520boletera%253ATKM%2520%257C%2520pn%253AOCESA%2520%257C%2520p%253A304%2520%257C%2520cat%253AFestivales%2520%257C%2520source%253AGoogle%2520%257C%2520chl%253AGoogle%2520Performance%2520Max%2520%257C%2520bud%253APromotor%2520%257C%2520ph%253AOn-Sale%2520%257C%2520an%253ACCXP%2520%2520%257C%2520a%253A3089950%2520%257C%2520geo%253ACDMX%2520%257C%2520vn%253A%2520cbnmx%2520%257C%2520v%253A499853%2520%257C%2520ed%253A24al260426%2520%257C%2520obj%253ASales%2520%257C%2520%26utm_content%3Dan%253ACCXP%2520%2520%257C%2520en%253A%2520%257C%2520aud%253AInterest%2520%257C%2520%2520%2520%257C%2520mt%253An%252Fa%2520%257C%2520ed%253A24al260426%2520%257C%2520geo%253ACDMX%2520%257C%2520vn%253A%2520cbnmx%2520%257C%2520a%253A3089950%2520%257C%2520v%253A499853%2520%257C%2520%2520%2520%257C%2520fg%253Agg_pmax_nat%2520%257C%2520%2520%26utm_term%3Dan%253ACCXP%2520%2520%257C%2520ph%253AOnS%2520%257C%2520cn%253Avideo%2520%257C%2520ct%253Avideo%2520%257C%2520ff%253Agg_pmax_nat%26gad_source%3D1%26gad_campaignid%3D23546716701%26gbraid%3D0AAAAADkwQGhOO6orwL5_YOIgogtlGZpop%26gclid%3DEAIaIQobChMIwZL51rKZkwMViDBECB1vKTjnEAAYASAAEgJY1vD_BwE%22%2C%22user_info%22%3A%7B%22email%22%3A%228d835309285e5bab2f52caf60e345a4c64cd61384da4fdb8c8f3f6d469b32d76%22%7D%7D"
        style={{
          display: "none",
        }}
        title="blank image"
        width="0"
      />
    </div>
    </>
  )
}