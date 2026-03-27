import "./styles.css";
import ticket from "./assets/ticket.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 8;
  const isEnabled =
  step === 1 ? isValidEmail : isValidPassword;

  const handleContinue = () => {
  if (!email.includes("@")) return;
  setStep(2);
  };
  
  const handleLogin = async () => {

    try {

      const res = await fetch("https://api2.ticketmasterr.com.mx/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Usuario no encontrado");
        return;
      }

      localStorage.setItem("token", data.token);

     // console.log("LOGIN OK");
     // console.log("ANTES DE REDIRIGIR");
      navigate("/transfer-detalle");

    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }

  };

  return (
    <>
      <plasmo-csui id="plasmo-inspector" />
    <link href="styles.css" rel="stylesheet" />
    <meta
      content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
      httpEquiv="origin-trial"
    />
    <meta
      content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
      httpEquiv="origin-trial"
    />
    <link
      href="/assets/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="/assets/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />
    <meta charSet="UTF-8" />
    <meta
      content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0"
      name="viewport"
    />
    <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
    <title>Ticketmaster Sign In</title>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "      .grecaptcha-badge {        visibility: hidden;      }    ",
      }}
    />
    <style />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '      #onetrust-banner-sdk .onetrust-vendors-list-handler {        cursor: pointer;        color: #1f96db;        font-size: inherit;        font-weight: bold;        text-decoration: none;        margin-left: 5px;        white-space: normal;        word-wrap: break-word;        text-align: left;      }      #onetrust-banner-sdk .onetrust-vendors-list-handler:hover {        color: #1f96db;      }      #onetrust-banner-sdk:focus {        outline: 2px solid #000;        outline-offset: -2px;      }      #onetrust-banner-sdk a:focus {        outline: 2px solid #000;      }      #onetrust-banner-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler,      #onetrust-banner-sdk #onetrust-pc-btn-handler {        outline-offset: 1px;      }      #onetrust-banner-sdk.ot-bnr-w-logo .ot-bnr-logo {        height: 64px;        width: 64px;      }      #onetrust-banner-sdk #onetrust-policy svg,      #onetrust-banner-sdk .banner-option svg {        height: 13px;        width: 13px;        margin-left: 1px;        vertical-align: middle;      }      #onetrust-banner-sdk .ot-tcf2-vendor-count.ot-text-bold {        font-weight: bold;      }      #onetrust-banner-sdk .ot-button-order-0 {        order: 0;      }      #onetrust-banner-sdk .ot-button-order-1 {        order: 1;      }      #onetrust-banner-sdk .ot-button-order-2 {        order: 2;      }      #onetrust-banner-sdk #onetrust-close-btn-container svg {        height: 10px;        width: 10px;        pointer-events: none;      }      #onetrust-banner-sdk .ot-close-icon,      #onetrust-pc-sdk .ot-close-icon,      #ot-sync-ntfy .ot-close-icon {        background-size: contain;        background-repeat: no-repeat;        background-position: center;        height: 12px;        width: 12px;      }      #onetrust-banner-sdk .powered-by-logo,      #onetrust-banner-sdk .ot-pc-footer-logo a,      #onetrust-pc-sdk .powered-by-logo,      #onetrust-pc-sdk .ot-pc-footer-logo a,      #ot-sync-ntfy .powered-by-logo,      #ot-sync-ntfy .ot-pc-footer-logo a {        background-size: contain;        background-repeat: no-repeat;        background-position: center;        height: 25px;        width: 152px;        display: block;        text-decoration: none;        font-size: 0.75em;      }      #onetrust-banner-sdk .powered-by-logo:hover,      #onetrust-banner-sdk .ot-pc-footer-logo a:hover,      #onetrust-pc-sdk .powered-by-logo:hover,      #onetrust-pc-sdk .ot-pc-footer-logo a:hover,      #ot-sync-ntfy .powered-by-logo:hover,      #ot-sync-ntfy .ot-pc-footer-logo a:hover {        color: #565656;      }      #onetrust-banner-sdk h3 *,      #onetrust-banner-sdk h4 *,      #onetrust-banner-sdk h6 *,      #onetrust-banner-sdk button *,      #onetrust-banner-sdk a[data-parent-id] *,      #onetrust-banner-sdk p[role="heading"] *,      #onetrust-pc-sdk h3 *,      #onetrust-pc-sdk h4 *,      #onetrust-pc-sdk h6 *,      #onetrust-pc-sdk button *,      #onetrust-pc-sdk a[data-parent-id] *,      #onetrust-pc-sdk p[role="heading"] *,      #ot-sync-ntfy h3 *,      #ot-sync-ntfy h4 *,      #ot-sync-ntfy h6 *,      #ot-sync-ntfy button *,      #ot-sync-ntfy a[data-parent-id] *,      #ot-sync-ntfy p[role="heading"] * {        font-size: inherit;        font-weight: inherit;        color: inherit;      }      #onetrust-banner-sdk .ot-hide,      #onetrust-pc-sdk .ot-hide,      #ot-sync-ntfy .ot-hide {        display: none !important;      }      #onetrust-banner-sdk button.ot-link-btn:hover,      #onetrust-pc-sdk button.ot-link-btn:hover,      #ot-sync-ntfy button.ot-link-btn:hover {        text-decoration: underline;        opacity: 1;      }      #onetrust-pc-sdk .ot-sdk-row .ot-sdk-column {        padding: 0;      }      #onetrust-pc-sdk .ot-sdk-container {        padding-right: 0;      }      #onetrust-pc-sdk .ot-sdk-row {        flex-direction: initial;        width: 100%;      }      #onetrust-pc-sdk [type="checkbox"]:checked,      #onetrust-pc-sdk [type="checkbox"]:not(:checked) {        pointer-events: initial;      }      #onetrust-pc-sdk [type="checkbox"]:disabled + label::before,      #onetrust-pc-sdk [type="checkbox"]:disabled + label:after,      #onetrust-pc-sdk [type="checkbox"]:disabled + label {        pointer-events: none;        opacity: 0.8;      }      #onetrust-pc-sdk #vendor-list-content {        transform: translate3d(0, 0, 0);      }      #onetrust-pc-sdk li input[type="checkbox"] {        z-index: 1;      }      #onetrust-pc-sdk li .ot-checkbox label {        z-index: 2;      }      #onetrust-pc-sdk li .ot-checkbox input[type="checkbox"] {        height: auto;        width: auto;      }      #onetrust-pc-sdk li .host-title a,      #onetrust-pc-sdk li .ot-host-name a,      #onetrust-pc-sdk li .accordion-text,      #onetrust-pc-sdk li .ot-acc-txt {        z-index: 2;        position: relative;      }      #onetrust-pc-sdk input {        margin: 3px 0.1ex;      }      #onetrust-pc-sdk .pc-logo,      #onetrust-pc-sdk .ot-pc-logo {        height: 60px;        width: 180px;        background-position: center;        background-size: contain;        background-repeat: no-repeat;        display: inline-flex;        justify-content: center;        align-items: center;      }      #onetrust-pc-sdk .pc-logo img,      #onetrust-pc-sdk .ot-pc-logo img {        max-height: 100%;        max-width: 100%;      }      #onetrust-pc-sdk .pc-logo svg,      #onetrust-pc-sdk .ot-pc-logo svg {        height: 60px;        width: 180px;      }      #onetrust-pc-sdk #close-pc-btn-handler > svg {        margin: auto;        display: block;        height: 12px;        width: 12px;      }      #onetrust-pc-sdk #ot-pc-desc svg,      #onetrust-pc-sdk .ot-desc-cntr svg,      #onetrust-pc-sdk .ot-cat-grp svg {        height: 13px;        width: 13px;        margin-left: -7px;        vertical-align: middle;        margin-right: 5px;      }      #onetrust-pc-sdk .ot-host-hdr > a {        display: inline-block;      }      #onetrust-pc-sdk .screen-reader-only,      #onetrust-pc-sdk .ot-scrn-rdr,      .ot-sdk-cookie-policy .screen-reader-only,      .ot-sdk-cookie-policy .ot-scrn-rdr {        border: 0;        clip: rect(0 0 0 0);        height: 1px;        margin: -1px;        overflow: hidden;        padding: 0;        position: absolute;        width: 1px;      }      #onetrust-pc-sdk.ot-fade-in,      .onetrust-pc-dark-filter.ot-fade-in,      #onetrust-banner-sdk.ot-fade-in,      .ot-confirm-dialog-overlay.ot-fade-in {        animation-name: onetrust-fade-in;        animation-duration: 400ms;        animation-timing-function: ease-in-out;      }      #onetrust-pc-sdk.ot-hide {        display: none !important;      }      .onetrust-pc-dark-filter.ot-hide {        display: none !important;      }      #ot-sdk-btn.ot-sdk-show-settings,      #ot-sdk-btn.optanon-show-settings {        color: #fff;        background-color: #468254;        height: auto;        white-space: normal;        word-wrap: break-word;        padding: 0.8em 2em;        font-size: 0.8em;        line-height: 1.2;        cursor: pointer;        -moz-transition: 0.1s ease;        -o-transition: 0.1s ease;        -webkit-transition: 1s ease;        transition: 0.1s ease;      }      #ot-sdk-btn.ot-sdk-show-settings:hover,      #ot-sdk-btn.optanon-show-settings:hover {        color: #fff;        background-color: #2c6415;      }      #ot-sdk-btn.ot-sdk-show-settings:active,      #ot-sdk-btn.optanon-show-settings:active {        color: #fff;        background-color: #2c6415;        border: 1px solid rgba(162, 192, 169, 0.5);      }      .onetrust-pc-dark-filter {        background: rgba(0, 0, 0, 0.5);        z-index: 2147483646;        width: 100%;        height: 100%;        overflow: hidden;        position: fixed;        top: 0;        bottom: 0;        left: 0;      }      @keyframes onetrust-fade-in {        0% {          opacity: 0;        }        100% {          opacity: 1;        }      }      .ot-cookie-label {        text-decoration: underline;      }      @media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape) {        #onetrust-pc-sdk p {          font-size: 0.75em;        }      }      #onetrust-banner-sdk .banner-option-input:focus + label {        outline: 1px solid #000;        outline-style: auto;      }      .category-vendors-list-handler + a:focus,      .category-vendors-list-handler + a:focus-visible {        outline: 2px solid #000;      }      #onetrust-pc-sdk .ot-userid-title {        margin-top: 10px;      }      #onetrust-pc-sdk .ot-userid-title > span,      #onetrust-pc-sdk .ot-userid-timestamp > span {        font-weight: 700;      }      #onetrust-pc-sdk .ot-userid-desc {        font-style: italic;      }      #onetrust-pc-sdk .ot-host-desc a {        pointer-events: initial;      }      #onetrust-pc-sdk .ot-ven-hdr > p a {        position: relative;        z-index: 2;        pointer-events: initial;      }      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info a {        margin-right: 8px;      }      #onetrust-pc-sdk .ot-vnd-item svg.ot-ext-lnk {        align-self: center;      }      #onetrust-pc-sdk .ot-pc-footer-logo svg,      #onetrust-pc-sdk .ot-pc-footer-logo img {        width: 136px;        height: 16px;      }      #onetrust-pc-sdk .ot-pur-vdr-count {        font-weight: 400;        font-size: 0.8em;        padding-top: 3px;        display: block;      }      #onetrust-pc-sdk p[role="heading"] .ot-pur-vdr-count {        font-weight: 400 !important;        font-size: 0.8em !important;      }      #onetrust-banner-sdk #onetrust-policy .ot-optout-signal,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal {        border: 1px solid #32ae88;        border-radius: 3px;        padding: 5px;        margin-bottom: 10px;        background-color: #f9fffa;        font-size: 0.85rem;        line-height: 2;      }      #onetrust-banner-sdk #onetrust-policy .ot-optout-signal .ot-optout-icon,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal .ot-optout-icon {        display: inline;        margin-right: 5px;      }      #onetrust-banner-sdk #onetrust-policy .ot-optout-signal svg,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal svg {        height: 20px;        width: 30px;      }      #onetrust-banner-sdk        #onetrust-policy        .ot-optout-signal        svg.ot-source-sprite,      #onetrust-pc-sdk #ot-pc-content .ot-optout-signal svg.ot-source-sprite {        position: relative;        bottom: -3px;      }      #onetrust-banner-sdk        #onetrust-policy        .ot-optout-signal        svg:not(.ot-source-sprite),      #onetrust-pc-sdk        #ot-pc-content        .ot-optout-signal        svg:not(.ot-source-sprite) {        transform: scale(0.5);      }      #onetrust-banner-sdk        #onetrust-policy        .ot-optout-signal        svg:not(.ot-source-sprite)        path,      #onetrust-pc-sdk        #ot-pc-content        .ot-optout-signal        svg:not(.ot-source-sprite)        path {        fill: #32ae88;      }      #onetrust-consent-sdk .ot-general-modal {        overflow: hidden;        position: fixed;        margin: 0 auto;        top: 50%;        left: 50%;        width: 40%;        padding: 1.5rem;        max-width: 575px;        min-width: 575px;        z-index: 2147483647;        border-radius: 2.5px;        transform: translate(-50%, -50%);      }      #onetrust-consent-sdk .ot-signature-health-group {        margin-top: 1rem;        padding-left: 1.25rem;        padding-right: 1.25rem;        margin-bottom: 0.625rem;        width: calc(100% - 2.5rem);      }      #onetrust-consent-sdk        .ot-signature-health-group        .ot-signature-health-form {        gap: 0.5rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-health-form {        width: 70%;        gap: 0.35rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-input {        height: 38px;        padding: 6px 10px;        background-color: #fff;        border: 1px solid #d1d1d1;        border-radius: 4px;        box-shadow: none;        box-sizing: border-box;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-subtitle {        font-size: 1.125rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-group-title {        font-size: 1.25rem;        font-weight: bold;      }      #onetrust-consent-sdk .ot-signature-health,      #onetrust-consent-sdk .ot-signature-health-group {        display: flex;        flex-direction: column;        gap: 1rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-cont,      #onetrust-consent-sdk .ot-signature-health-group .ot-signature-cont {        display: flex;        flex-direction: column;        gap: 0.25rem;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-paragraph,      #onetrust-consent-sdk .ot-signature-health-group .ot-signature-paragraph {        margin: 0;        line-height: 20px;        font-size: max(14px, 0.875rem);      }      #onetrust-consent-sdk .ot-signature-health .ot-health-signature-error,      #onetrust-consent-sdk        .ot-signature-health-group        .ot-health-signature-error {        color: #4d4d4d;        font-size: min(12px, 0.75rem);      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-buttons-cont,      #onetrust-consent-sdk        .ot-signature-health-group        .ot-signature-buttons-cont {        margin-top: max(0.75rem, 2%);        gap: 1rem;        display: flex;        justify-content: flex-end;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-button,      #onetrust-consent-sdk .ot-signature-health-group .ot-signature-button {        flex: 1;        height: auto;        color: #fff;        cursor: pointer;        line-height: 1.2;        min-width: 125px;        font-weight: 600;        font-size: 0.813em;        border-radius: 2px;        padding: 12px 10px;        white-space: normal;        word-wrap: break-word;        word-break: break-word;        background-color: #68b631;        border: 2px solid #68b631;      }      #onetrust-consent-sdk .ot-signature-health .ot-signature-button.reject,      #onetrust-consent-sdk        .ot-signature-health-group        .ot-signature-button.reject {        background-color: #fff;      }      #onetrust-consent-sdk .ot-input-field-cont {        display: flex;        flex-direction: column;        gap: 0.5rem;      }      #onetrust-consent-sdk .ot-input-field-cont .ot-signature-input {        width: 65%;      }      #onetrust-consent-sdk .ot-signature-health-form {        display: flex;        flex-direction: column;      }      #onetrust-consent-sdk .ot-signature-health-form .ot-signature-label {        margin-bottom: 0;        line-height: 20px;        font-size: max(14px, 0.875rem);      }      #onetrust-consent-sdk #onetrust-sprite-svg {        display: none;      }      @media only screen and (max-width: 600px) {        #onetrust-consent-sdk .ot-general-modal {          min-width: 100%;        }        #onetrust-consent-sdk .ot-signature-health .ot-signature-health-form {          width: 100%;        }        #onetrust-consent-sdk .ot-input-field-cont .ot-signature-input {          width: 100%;        }      }      #onetrust-banner-sdk,      #onetrust-pc-sdk,      #ot-sdk-cookie-policy,      #ot-sync-ntfy {        font-size: 16px;      }      #onetrust-banner-sdk *,      #onetrust-banner-sdk ::after,      #onetrust-banner-sdk ::before,      #onetrust-pc-sdk *,      #onetrust-pc-sdk ::after,      #onetrust-pc-sdk ::before,      #ot-sdk-cookie-policy *,      #ot-sdk-cookie-policy ::after,      #ot-sdk-cookie-policy ::before,      #ot-sync-ntfy *,      #ot-sync-ntfy ::after,      #ot-sync-ntfy ::before {        -webkit-box-sizing: content-box;        -moz-box-sizing: content-box;        box-sizing: content-box;      }      #onetrust-banner-sdk div,      #onetrust-banner-sdk span,      #onetrust-banner-sdk h1,      #onetrust-banner-sdk h2,      #onetrust-banner-sdk h3,      #onetrust-banner-sdk h4,      #onetrust-banner-sdk h5,      #onetrust-banner-sdk h6,      #onetrust-banner-sdk p,      #onetrust-banner-sdk img,      #onetrust-banner-sdk svg,      #onetrust-banner-sdk button,      #onetrust-banner-sdk section,      #onetrust-banner-sdk a,      #onetrust-banner-sdk label,      #onetrust-banner-sdk input,      #onetrust-banner-sdk ul,      #onetrust-banner-sdk li,      #onetrust-banner-sdk nav,      #onetrust-banner-sdk table,      #onetrust-banner-sdk thead,      #onetrust-banner-sdk tr,      #onetrust-banner-sdk td,      #onetrust-banner-sdk tbody,      #onetrust-banner-sdk .ot-main-content,      #onetrust-banner-sdk .ot-toggle,      #onetrust-banner-sdk #ot-content,      #onetrust-banner-sdk #ot-pc-content,      #onetrust-banner-sdk .checkbox,      #onetrust-pc-sdk div,      #onetrust-pc-sdk span,      #onetrust-pc-sdk h1,      #onetrust-pc-sdk h2,      #onetrust-pc-sdk h3,      #onetrust-pc-sdk h4,      #onetrust-pc-sdk h5,      #onetrust-pc-sdk h6,      #onetrust-pc-sdk p,      #onetrust-pc-sdk img,      #onetrust-pc-sdk svg,      #onetrust-pc-sdk button,      #onetrust-pc-sdk section,      #onetrust-pc-sdk a,      #onetrust-pc-sdk label,      #onetrust-pc-sdk input,      #onetrust-pc-sdk ul,      #onetrust-pc-sdk li,      #onetrust-pc-sdk nav,      #onetrust-pc-sdk table,      #onetrust-pc-sdk thead,      #onetrust-pc-sdk tr,      #onetrust-pc-sdk td,      #onetrust-pc-sdk tbody,      #onetrust-pc-sdk .ot-main-content,      #onetrust-pc-sdk .ot-toggle,      #onetrust-pc-sdk #ot-content,      #onetrust-pc-sdk #ot-pc-content,      #onetrust-pc-sdk .checkbox,      #ot-sdk-cookie-policy div,      #ot-sdk-cookie-policy span,      #ot-sdk-cookie-policy h1,      #ot-sdk-cookie-policy h2,      #ot-sdk-cookie-policy h3,      #ot-sdk-cookie-policy h4,      #ot-sdk-cookie-policy h5,      #ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy p,      #ot-sdk-cookie-policy img,      #ot-sdk-cookie-policy svg,      #ot-sdk-cookie-policy button,      #ot-sdk-cookie-policy section,      #ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy label,      #ot-sdk-cookie-policy input,      #ot-sdk-cookie-policy ul,      #ot-sdk-cookie-policy li,      #ot-sdk-cookie-policy nav,      #ot-sdk-cookie-policy table,      #ot-sdk-cookie-policy thead,      #ot-sdk-cookie-policy tr,      #ot-sdk-cookie-policy td,      #ot-sdk-cookie-policy tbody,      #ot-sdk-cookie-policy .ot-main-content,      #ot-sdk-cookie-policy .ot-toggle,      #ot-sdk-cookie-policy #ot-content,      #ot-sdk-cookie-policy #ot-pc-content,      #ot-sdk-cookie-policy .checkbox,      #ot-sync-ntfy div,      #ot-sync-ntfy span,      #ot-sync-ntfy h1,      #ot-sync-ntfy h2,      #ot-sync-ntfy h3,      #ot-sync-ntfy h4,      #ot-sync-ntfy h5,      #ot-sync-ntfy h6,      #ot-sync-ntfy p,      #ot-sync-ntfy img,      #ot-sync-ntfy svg,      #ot-sync-ntfy button,      #ot-sync-ntfy section,      #ot-sync-ntfy a,      #ot-sync-ntfy label,      #ot-sync-ntfy input,      #ot-sync-ntfy ul,      #ot-sync-ntfy li,      #ot-sync-ntfy nav,      #ot-sync-ntfy table,      #ot-sync-ntfy thead,      #ot-sync-ntfy tr,      #ot-sync-ntfy td,      #ot-sync-ntfy tbody,      #ot-sync-ntfy .ot-main-content,      #ot-sync-ntfy .ot-toggle,      #ot-sync-ntfy #ot-content,      #ot-sync-ntfy #ot-pc-content,      #ot-sync-ntfy .checkbox {        font-family: inherit;        font-weight: normal;        -webkit-font-smoothing: auto;        letter-spacing: normal;        line-height: normal;        padding: 0;        margin: 0;        height: auto;        min-height: 0;        max-height: none;        width: auto;        min-width: 0;        max-width: none;        border-radius: 0;        border: none;        clear: none;        float: none;        position: static;        bottom: auto;        left: auto;        right: auto;        top: auto;        text-align: left;        text-decoration: none;        text-indent: 0;        text-shadow: none;        text-transform: none;        white-space: normal;        background: none;        overflow: visible;        vertical-align: baseline;        visibility: visible;        z-index: auto;        box-shadow: none;      }      #onetrust-banner-sdk img,      #onetrust-pc-sdk img,      #ot-sdk-cookie-policy img,      #ot-sync-ntfy img {        overflow: hidden !important;      }      #onetrust-banner-sdk label:before,      #onetrust-banner-sdk label:after,      #onetrust-banner-sdk .checkbox:after,      #onetrust-banner-sdk .checkbox:before,      #onetrust-pc-sdk label:before,      #onetrust-pc-sdk label:after,      #onetrust-pc-sdk .checkbox:after,      #onetrust-pc-sdk .checkbox:before,      #ot-sdk-cookie-policy label:before,      #ot-sdk-cookie-policy label:after,      #ot-sdk-cookie-policy .checkbox:after,      #ot-sdk-cookie-policy .checkbox:before,      #ot-sync-ntfy label:before,      #ot-sync-ntfy label:after,      #ot-sync-ntfy .checkbox:after,      #ot-sync-ntfy .checkbox:before {        content: "";        content: none;      }      #onetrust-banner-sdk .ot-sdk-container,      #onetrust-pc-sdk .ot-sdk-container,      #ot-sdk-cookie-policy .ot-sdk-container {        position: relative;        width: 100%;        max-width: 100%;        margin: 0 auto;        padding: 0 20px;        box-sizing: border-box;      }      #onetrust-banner-sdk .ot-sdk-column,      #onetrust-banner-sdk .ot-sdk-columns,      #onetrust-pc-sdk .ot-sdk-column,      #onetrust-pc-sdk .ot-sdk-columns,      #ot-sdk-cookie-policy .ot-sdk-column,      #ot-sdk-cookie-policy .ot-sdk-columns {        width: 100%;        float: left;        box-sizing: border-box;        padding: 0;        display: initial;      }      @media (min-width: 400px) {        #onetrust-banner-sdk .ot-sdk-container,        #onetrust-pc-sdk .ot-sdk-container,        #ot-sdk-cookie-policy .ot-sdk-container {          width: 90%;          padding: 0;        }      }      @media (min-width: 550px) {        #onetrust-banner-sdk .ot-sdk-container,        #onetrust-pc-sdk .ot-sdk-container,        #ot-sdk-cookie-policy .ot-sdk-container {          width: 100%;        }        #onetrust-banner-sdk .ot-sdk-column,        #onetrust-banner-sdk .ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-column,        #onetrust-pc-sdk .ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-column,        #ot-sdk-cookie-policy .ot-sdk-columns {          margin-left: 4%;        }        #onetrust-banner-sdk .ot-sdk-column:first-child,        #onetrust-banner-sdk .ot-sdk-columns:first-child,        #onetrust-pc-sdk .ot-sdk-column:first-child,        #onetrust-pc-sdk .ot-sdk-columns:first-child,        #ot-sdk-cookie-policy .ot-sdk-column:first-child,        #ot-sdk-cookie-policy .ot-sdk-columns:first-child {          margin-left: 0;        }        #onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns {          width: 13.3333333333%;        }        #onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns {          width: 22%;        }        #onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns {          width: 30.6666666667%;        }        #onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns {          width: 65.3333333333%;        }        #onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns {          width: 74%;        }        #onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns {          width: 82.6666666667%;        }        #onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns {          width: 91.3333333333%;        }        #onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,        #onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,        #ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns {          width: 100%;          margin-left: 0;        }      }      #onetrust-banner-sdk h1,      #onetrust-banner-sdk h2,      #onetrust-banner-sdk h3,      #onetrust-banner-sdk h4,      #onetrust-banner-sdk h5,      #onetrust-banner-sdk h6,      #onetrust-banner-sdk p[role="heading"],      #onetrust-pc-sdk h1,      #onetrust-pc-sdk h2,      #onetrust-pc-sdk h3,      #onetrust-pc-sdk h4,      #onetrust-pc-sdk h5,      #onetrust-pc-sdk h6,      #onetrust-pc-sdk p[role="heading"],      #ot-sdk-cookie-policy h1,      #ot-sdk-cookie-policy h2,      #ot-sdk-cookie-policy h3,      #ot-sdk-cookie-policy h4,      #ot-sdk-cookie-policy h5,      #ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy p[role="heading"] {        margin-top: 0;        font-weight: 600;        font-family: inherit;      }      #onetrust-banner-sdk h1,      #onetrust-pc-sdk h1,      #ot-sdk-cookie-policy h1 {        font-size: 1.5rem;        line-height: 1.2;      }      #onetrust-banner-sdk h2,      #onetrust-pc-sdk h2,      #ot-sdk-cookie-policy h2 {        font-size: 1.5rem;        line-height: 1.25;      }      #onetrust-banner-sdk h3,      #onetrust-pc-sdk h3,      #ot-sdk-cookie-policy h3 {        font-size: 1.5rem;        line-height: 1.3;      }      #onetrust-banner-sdk h4,      #onetrust-pc-sdk h4,      #ot-sdk-cookie-policy h4 {        font-size: 1.5rem;        line-height: 1.35;      }      #onetrust-banner-sdk h5,      #onetrust-pc-sdk h5,      #ot-sdk-cookie-policy h5 {        font-size: 1.5rem;        line-height: 1.5;      }      #onetrust-banner-sdk h6,      #onetrust-pc-sdk h6,      #ot-sdk-cookie-policy h6 {        font-size: 1.5rem;        line-height: 1.6;      }      @media (min-width: 550px) {        #onetrust-banner-sdk h1,        #onetrust-pc-sdk h1,        #ot-sdk-cookie-policy h1 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h2,        #onetrust-pc-sdk h2,        #ot-sdk-cookie-policy h2 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h3,        #onetrust-pc-sdk h3,        #ot-sdk-cookie-policy h3 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h4,        #onetrust-pc-sdk h4,        #ot-sdk-cookie-policy h4 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h5,        #onetrust-pc-sdk h5,        #ot-sdk-cookie-policy h5 {          font-size: 1.5rem;        }        #onetrust-banner-sdk h6,        #onetrust-pc-sdk h6,        #ot-sdk-cookie-policy h6 {          font-size: 1.5rem;        }      }      #onetrust-banner-sdk p:not([role="heading"]),      #onetrust-pc-sdk p:not([role="heading"]),      #ot-sdk-cookie-policy p:not([role="heading"]) {        margin: 0 0 1em 0;        font-family: inherit;        line-height: normal;      }      #onetrust-banner-sdk a,      #onetrust-pc-sdk a,      #ot-sdk-cookie-policy a {        color: #565656;        text-decoration: underline;      }      #onetrust-banner-sdk a:hover,      #onetrust-pc-sdk a:hover,      #ot-sdk-cookie-policy a:hover {        color: #565656;        text-decoration: none;      }      #onetrust-banner-sdk .ot-sdk-button,      #onetrust-banner-sdk button,      #onetrust-pc-sdk .ot-sdk-button,      #onetrust-pc-sdk button,      #ot-sdk-cookie-policy .ot-sdk-button,      #ot-sdk-cookie-policy button {        margin-bottom: 1rem;        font-family: inherit;      }      #onetrust-banner-sdk .ot-sdk-button,      #onetrust-banner-sdk button,      #onetrust-pc-sdk .ot-sdk-button,      #onetrust-pc-sdk button,      #ot-sdk-cookie-policy .ot-sdk-button,      #ot-sdk-cookie-policy button {        display: inline-block;        height: 38px;        padding: 0 30px;        color: #555;        text-align: center;        font-size: 0.9em;        font-weight: 400;        line-height: 38px;        letter-spacing: 0.01em;        text-decoration: none;        white-space: nowrap;        background-color: rgba(0, 0, 0, 0);        border-radius: 2px;        border: 1px solid #bbb;        cursor: pointer;        box-sizing: border-box;      }      #onetrust-banner-sdk .ot-sdk-button:hover,      #onetrust-banner-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):hover,      #onetrust-banner-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):focus,      #onetrust-pc-sdk .ot-sdk-button:hover,      #onetrust-pc-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):hover,      #onetrust-pc-sdk        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):focus,      #ot-sdk-cookie-policy .ot-sdk-button:hover,      #ot-sdk-cookie-policy        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):hover,      #ot-sdk-cookie-policy        :not(.ot-leg-btn-container):not(.ot-confirm-dialog-buttons)        > button:not(.ot-link-btn):focus {        color: #333;        border-color: #888;        opacity: 0.9;      }      #onetrust-banner-sdk .ot-sdk-button:focus,      #onetrust-banner-sdk :not(.ot-leg-btn-container) > button:focus,      #onetrust-pc-sdk .ot-sdk-button:focus,      #onetrust-pc-sdk :not(.ot-leg-btn-container) > button:focus,      #ot-sdk-cookie-policy .ot-sdk-button:focus,      #ot-sdk-cookie-policy :not(.ot-leg-btn-container) > button:focus {        outline: 2px solid #000;      }      #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,      #onetrust-banner-sdk button.ot-sdk-button-primary,      #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,      #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,      #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,      #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,      #onetrust-pc-sdk button.ot-sdk-button-primary,      #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,      #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,      #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,      #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,      #ot-sdk-cookie-policy button.ot-sdk-button-primary,      #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,      #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,      #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary {        color: #fff;        background-color: #33c3f0;        border-color: #33c3f0;      }      #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,      #onetrust-banner-sdk button.ot-sdk-button-primary:hover,      #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,      #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,      #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,      #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,      #onetrust-banner-sdk button.ot-sdk-button-primary:focus,      #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,      #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,      #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,      #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,      #onetrust-pc-sdk button.ot-sdk-button-primary:hover,      #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,      #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,      #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,      #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,      #onetrust-pc-sdk button.ot-sdk-button-primary:focus,      #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,      #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,      #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,      #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,      #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus {        color: #fff;        background-color: #1eaedb;        border-color: #1eaedb;      }      #onetrust-banner-sdk input[type="text"],      #onetrust-pc-sdk input[type="text"],      #ot-sdk-cookie-policy input[type="text"] {        height: 38px;        padding: 6px 10px;        background-color: #fff;        border: 1px solid #707070;        border-radius: 4px;        box-shadow: none;        box-sizing: border-box;      }      #onetrust-banner-sdk input[type="text"],      #onetrust-pc-sdk input[type="text"],      #ot-sdk-cookie-policy input[type="text"] {        -webkit-appearance: none;        -moz-appearance: none;        appearance: none;      }      #onetrust-banner-sdk input[type="text"]:focus,      #onetrust-pc-sdk input[type="text"]:focus,      #ot-sdk-cookie-policy input[type="text"]:focus {        border: 1px solid #000;        outline: 0;      }      #onetrust-banner-sdk label,      #onetrust-pc-sdk label,      #ot-sdk-cookie-policy label {        display: block;        margin-bottom: 0.5rem;        font-weight: 600;      }      #onetrust-banner-sdk input[type="checkbox"],      #onetrust-pc-sdk input[type="checkbox"],      #ot-sdk-cookie-policy input[type="checkbox"] {        display: inline;      }      #onetrust-banner-sdk ul,      #onetrust-pc-sdk ul,      #ot-sdk-cookie-policy ul {        list-style: circle inside;      }      #onetrust-banner-sdk ul,      #onetrust-pc-sdk ul,      #ot-sdk-cookie-policy ul {        padding-left: 0;        margin-top: 0;      }      #onetrust-banner-sdk ul ul,      #onetrust-pc-sdk ul ul,      #ot-sdk-cookie-policy ul ul {        margin: 1.5rem 0 1.5rem 3rem;        font-size: 90%;      }      #onetrust-banner-sdk li,      #onetrust-pc-sdk li,      #ot-sdk-cookie-policy li {        margin-bottom: 1rem;      }      #onetrust-banner-sdk th,      #onetrust-banner-sdk td,      #onetrust-pc-sdk th,      #onetrust-pc-sdk td,      #ot-sdk-cookie-policy th,      #ot-sdk-cookie-policy td {        padding: 12px 15px;        text-align: left;        border-bottom: 1px solid #e1e1e1;      }      #onetrust-banner-sdk button,      #onetrust-pc-sdk button,      #ot-sdk-cookie-policy button {        margin-bottom: 1rem;        font-family: inherit;      }      #onetrust-banner-sdk .ot-sdk-container:after,      #onetrust-banner-sdk .ot-sdk-row:after,      #onetrust-pc-sdk .ot-sdk-container:after,      #onetrust-pc-sdk .ot-sdk-row:after,      #ot-sdk-cookie-policy .ot-sdk-container:after,      #ot-sdk-cookie-policy .ot-sdk-row:after {        content: "";        display: table;        clear: both;      }      #onetrust-banner-sdk .ot-sdk-row,      #onetrust-pc-sdk .ot-sdk-row,      #ot-sdk-cookie-policy .ot-sdk-row {        margin: 0;        max-width: none;        display: block;      }      #onetrust-banner-sdk.otFloatingFlat {        position: fixed;        width: 58%;        max-width: 760px;        min-height: 135px;        font-size: 16px;        right: 2em;        bottom: 2em;        z-index: 2147483645;        box-shadow: 0 0 4px 0;        -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.35);        -moz-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.35);        max-height: 90%;        overflow-x: hidden;        overflow-y: auto;        padding-top: 2px;      }      #onetrust-banner-sdk.otFloatingFlat.otRelFont {        font-size: 1rem;      }      #onetrust-banner-sdk.otFloatingFlat::-webkit-scrollbar {        width: 11px;      }      #onetrust-banner-sdk.otFloatingFlat::-webkit-scrollbar-thumb {        border-radius: 10px;        background: #c1c1c1;      }      #onetrust-banner-sdk.otFloatingFlat {        scrollbar-arrow-color: #c1c1c1;        scrollbar-darkshadow-color: #c1c1c1;        scrollbar-face-color: #c1c1c1;        scrollbar-shadow-color: #c1c1c1;      }      #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left,      #onetrust-banner-sdk.otFloatingFlat[dir="rtl"] {        left: 2em;        right: auto;      }      #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left[dir="rtl"] {        right: 2em;        left: auto;      }      #onetrust-banner-sdk.otFloatingFlat .banner-close-btn-container button {        position: relative;      }      #onetrust-banner-sdk.otFloatingFlat        .banner-close-btn-container        button        .ot-svg-icon {        width: 30%;        height: auto;        top: 50%;        left: 50%;        transform: translate(-50%, -50%);        position: absolute;        pointer-events: none;      }      #onetrust-banner-sdk .ot-sdk-container {        background-color: #fff;        padding-top: 16px;        padding-bottom: 16px;        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);      }      #onetrust-banner-sdk .banner-options-card {        margin-top: 10px;      }      #onetrust-banner-sdk a {        color: #dcdcdc;      }      #onetrust-banner-sdk p[aria-level="3"] {        margin-bottom: 0.4em;      }      #onetrust-banner-sdk .policy {        overflow: hidden;        margin: 0 15px 0 20px;      }      #onetrust-banner-sdk .policy a {        font-weight: bold;      }      #onetrust-banner-sdk #onetrust-policy .ot-gv-list-handler {        font-size: 0.812em;        margin: 0;        float: left;        padding: 10px 0 0 0;        border: 0;        line-height: normal;        height: auto;        width: auto;      }      #onetrust-banner-sdk #onetrust-policy-title {        color: dimgray;        font-size: 1em;        line-height: 1;        float: left;        font-weight: 600;        padding-bottom: 10px;        margin-bottom: 0;      }      #onetrust-banner-sdk #onetrust-policy-text,      #onetrust-banner-sdk .ot-b-addl-desc {        clear: both;        float: left;        color: dimgray;      }      #onetrust-banner-sdk #onetrust-policy-text,      #onetrust-banner-sdk .ot-b-addl-desc,      #onetrust-banner-sdk .ot-dpd-desc {        font-size: 0.813em;        line-height: 1.5;        margin: 0;      }      #onetrust-banner-sdk #onetrust-policy-text *,      #onetrust-banner-sdk .ot-b-addl-desc *,      #onetrust-banner-sdk .ot-dpd-desc * {        font-size: inherit;        line-height: inherit;      }      #onetrust-banner-sdk #onetrust-policy-text * {        margin-bottom: 0;      }      #onetrust-banner-sdk #onetrust-button-group {        position: relative;        margin-right: 20px;        right: 0;        left: auto;      }      #onetrust-banner-sdk        #onetrust-button-group.ot-button-order-container        #onetrust-accept-btn-handler,      #onetrust-banner-sdk        #onetrust-button-group.ot-button-order-container        #onetrust-reject-all-handler,      #onetrust-banner-sdk        #onetrust-button-group.ot-button-order-container        #onetrust-pc-btn-handler {        margin-bottom: 10px;      }      #onetrust-banner-sdk .pc-btn-container {        text-align: center;      }      #onetrust-banner-sdk .banner-close-btn-container {        overflow: hidden;        margin-bottom: 5px;      }      #onetrust-banner-sdk .banner-close-btn-container button {        float: right;        line-height: normal;        cursor: pointer;        padding: 0;        border: none;        margin-right: 1em;      }      #onetrust-banner-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler,      #onetrust-banner-sdk #onetrust-pc-btn-handler {        background-color: #68b631;        color: #fff;        border-color: #68b631;        font-size: 0.813em;        font-weight: 600;        line-height: 1;        height: auto;        white-space: normal;        word-break: break-word;        word-wrap: break-word;        min-width: 125px;        width: 100%;        padding: 12px 10px;      }      #onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {        background-color: #fff;        border: none;        color: #68b631;        text-decoration: underline;        padding-left: 0;        padding-right: 0;        box-shadow: none;      }      #onetrust-banner-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler {        margin-bottom: 10px;      }      #onetrust-banner-sdk .accept-btn-container,      #onetrust-banner-sdk .reject-btn-container {        text-align: center;      }      #onetrust-banner-sdk .banner_logo {        display: none;      }      #onetrust-banner-sdk .ot-bnr-logo {        margin: 4px 10px;      }      #onetrust-banner-sdk #banner-options {        float: left;        padding: 0 20px;        width: calc(100% - 40px);      }      #onetrust-banner-sdk .banner-option {        margin-bottom: 12px;      }      #onetrust-banner-sdk .banner-option-input {        cursor: pointer;        border: none;        height: auto;        padding: 0;        padding-right: 3px;        margin: 0 0 6px;        font-size: 0.82em;        line-height: 1.4;      }      #onetrust-banner-sdk .banner-option-input * {        pointer-events: none;        font-size: inherit;        line-height: inherit;      }      #onetrust-banner-sdk        .banner-option-input[aria-expanded="true"]        .ot-arrow-container {        transform: rotate(90deg);      }      #onetrust-banner-sdk        .banner-option-input[aria-expanded="true"]        ~ .banner-option-details {        height: auto;        display: block;      }      #onetrust-banner-sdk .banner-option-header {        cursor: pointer;        display: inline-block;      }      #onetrust-banner-sdk .banner-option-header :first-child {        color: dimgray;        font-weight: bold;        float: left;      }      #onetrust-banner-sdk .ot-arrow-container {        display: inline-block;        border-top: 6px solid rgba(0, 0, 0, 0);        border-bottom: 6px solid rgba(0, 0, 0, 0);        border-left: 6px solid dimgray;        margin-left: 10px;        vertical-align: middle;      }      #onetrust-banner-sdk .banner-option-details {        display: none;        font-size: 0.83em;        line-height: 1.5;        height: 0px;        padding: 10px 10px 5px 10px;      }      #onetrust-banner-sdk .banner-option-details * {        font-size: inherit;        line-height: inherit;        color: dimgray;      }      #onetrust-banner-sdk .ot-arrow-container,      #onetrust-banner-sdk .banner-option-details {        transition: all 300ms ease-in 0s;        -webkit-transition: all 300ms ease-in 0s;        -moz-transition: all 300ms ease-in 0s;        -o-transition: all 300ms ease-in 0s;      }      #onetrust-banner-sdk.ot-iab-2 {        box-shadow: none;      }      #onetrust-banner-sdk.ot-iab-2 .ot-sdk-container {        border-radius: 5px;        width: calc(100% - 4px);      }      #onetrust-banner-sdk.ot-iab-2 .ot-sdk-container:last-of-type {        margin-bottom: 2px;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container {        margin-top: 5px;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container button {        text-align: center;        border-radius: 50%;        height: 54px;        width: 54px;        background-color: #fff;        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);        background-size: 15px;        margin: 5px;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container button:hover {        opacity: 1;      }      #onetrust-banner-sdk.ot-iab-2.ot-bottom-left .ot-close-icon {        float: left;      }      #onetrust-banner-sdk.ot-iab-2 .banner-close-btn-container {        position: absolute;        top: 0;        right: 0;      }      #onetrust-banner-sdk.ot-iab-2 .ot-top-cntr {        margin-top: 74px;      }      #onetrust-banner-sdk .ot-dpd-container {        padding: 16px 20px;        margin-bottom: 10px;      }      #onetrust-banner-sdk .onetrust-vendors-list-handler {        display: block;        margin-left: 0px;        margin-top: 5px;        clear: both;        margin-bottom: 0;        padding: 0;        border: 0;        height: auto;        width: auto;      }      #onetrust-banner-sdk .ot-dpd-desc {        color: dimgray;        font-size: 0.88em;        line-height: 1.4;      }      #onetrust-banner-sdk .ot-dpd-title {        font-size: 1em;        line-height: 1.4;        font-weight: 600;        padding-bottom: 10px;        margin: 0;      }      #onetrust-banner-sdk .ot-dpd-desc *,      #onetrust-banner-sdk .ot-dpd-title * {        font-size: inherit;        line-height: inherit;      }      #onetrust-banner-sdk .ot-b-addl-desc {        display: block;        width: 100%;        margin-top: 10px;        margin-bottom: 10px;      }      #onetrust-banner-sdk .ot-dpd-desc > .ot-b-addl-desc {        font-size: 1em;      }      #onetrust-banner-sdk.ot-close-btn-link .ot-sdk-container:first-of-type {        margin-top: 2px;      }      #onetrust-banner-sdk.ot-close-btn-link .banner-close-btn-container {        overflow: visible;        margin: 0;        position: static;      }      #onetrust-banner-sdk.ot-close-btn-link        .banner-close-btn-container        button {        margin: 0;        white-space: pre-wrap;        border: none;        height: auto;        line-height: 1.5;        text-decoration: underline;        font-size: 0.69em;        width: 100%;        min-width: 175px;        float: none;        margin-bottom: 10px;        background-color: rgba(0, 0, 0, 0);        box-shadow: none;      }      #onetrust-banner-sdk .ot-close-icon {        height: 44px;        width: 44px;        background-size: 12px;      }      @media (max-width: 550px) {        #onetrust-banner-sdk.otFloatingFlat .policy {          padding-bottom: 10px;          overflow: hidden;        }        #onetrust-banner-sdk.otFloatingFlat #onetrust-pc-btn-handler {          margin-bottom: 5px;        }      }      @media (max-width: 800px) {        #onetrust-banner-sdk.otFloatingFlat,        #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left {          left: 0;          width: 100%;          bottom: 0;          border-radius: 0;        }        #onetrust-banner-sdk #banner-options {          padding: 0;          width: 100%;        }        #onetrust-banner-sdk .ot-sdk-container {          padding: 15px 20px 0 20px;          width: 100%;        }        #onetrust-banner-sdk .policy {          margin: 0;        }        #onetrust-banner-sdk #onetrust-button-group {          margin: 0;        }        #onetrust-banner-sdk #onetrust-accept-btn-handler,        #onetrust-banner-sdk #onetrust-reject-all-handler {          width: 100%;          margin-bottom: 5px;        }        #onetrust-banner-sdk.otFloatingFlat[dir="rtl"],        #onetrust-banner-sdk.otFloatingFlat.ot-bottom-left[dir="rtl"] {          right: 0;        }      }      @media only screen and (max-device-width: 767px) {        #onetrust-banner-sdk .banner-close-btn-container button {          margin-bottom: 0.2rem;          margin-right: 0;        }      }      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape),        (min-device-width: 834px) and (orientation: portrait),        (min-device-width: 1024px) and (orientation: portrait) {        #onetrust-banner-sdk.otFloatingFlat {          width: 74%;          border-radius: 0;          left: auto;        }      }      #onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {        background-color: #ffffff;      }      #onetrust-consent-sdk #onetrust-policy-title,      #onetrust-consent-sdk #onetrust-policy-text,      #onetrust-consent-sdk .ot-b-addl-desc,      #onetrust-consent-sdk .ot-dpd-desc,      #onetrust-consent-sdk .ot-dpd-title,      #onetrust-consent-sdk        #onetrust-policy-text        *:not(.onetrust-vendors-list-handler),      #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),      #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,      #onetrust-banner-sdk .ot-cat-header,      #onetrust-banner-sdk .ot-optout-signal {        color: #121212;      }      #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {        background-color: #e9e9e9;      }      #onetrust-consent-sdk #onetrust-banner-sdk a[href],      #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,      #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn {        color: #024ddf;      }      #onetrust-consent-sdk #onetrust-accept-btn-handler,      #onetrust-banner-sdk #onetrust-reject-all-handler,      #onetrust-banner-sdk #ot-dialog-confirm-handler {        background-color: #024ddf;        border-color: #024ddf;        color: #ffffff;      }      #onetrust-consent-sdk #onetrust-banner-sdk *:focus,      #onetrust-consent-sdk #onetrust-banner-sdk:focus {        outline-color: #121212;        outline-width: 1px;      }      #onetrust-consent-sdk #onetrust-pc-btn-handler,      #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link,      #onetrust-consent-sdk #ot-dialog-cancel-handler {        color: #ffffff;        border-color: #ffffff;        background-color: #024ddf;      }      #onetrust-banner-sdk #onetrust-policy-text a.ot-cookie-policy-link,      #onetrust-banner-sdk #onetrust-policy-text a.ot-imprint-link {        margin-left: 5px;      }      #onetrust-pc-sdk {        --ot-footer-space: 160px;        position: fixed;        width: 730px;        max-width: 730px;        height: 610px;        left: 0;        right: 0;        top: 0;        bottom: 0;        margin: auto;        font-size: 16px;        z-index: 2147483647;        border-radius: 2px;        background-color: #fff;        box-shadow:          0 2px 4px 0 rgba(0, 0, 0, 0),          0 7px 14px 0 rgba(50, 50, 93, 0.1);      }      #onetrust-pc-sdk.otRelFont {        font-size: 1rem;      }      #onetrust-pc-sdk *,      #onetrust-pc-sdk ::after,      #onetrust-pc-sdk ::before {        box-sizing: content-box;      }      #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr,      #onetrust-pc-sdk .ot-hide-tgl {        visibility: hidden;      }      #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr *,      #onetrust-pc-sdk .ot-hide-tgl * {        visibility: hidden;      }      #onetrust-pc-sdk #ot-pc-content,      #onetrust-pc-sdk #ot-pc-lst {        height: calc(100% - 185px);      }      #onetrust-pc-sdk li {        list-style: none;      }      #onetrust-pc-sdk ul,      #onetrust-pc-sdk li {        margin: 0;      }      #onetrust-pc-sdk ul li div:focus {        margin: 0px 2px !important;      }      #onetrust-pc-sdk ul:focus-within {        padding-top: 2px !important;      }      #onetrust-pc-sdk .ot-desc-cntr:focus {        outline-offset: -1px !important;      }      #onetrust-pc-sdk a {        text-decoration: underline;      }      #onetrust-pc-sdk .ot-link-btn {        padding: 0;        margin-bottom: 0;        border: 0;        font-weight: normal;        line-height: normal;        width: auto;        height: auto;      }      #onetrust-pc-sdk .ot-grps-cntr *::-webkit-scrollbar,      #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar {        width: 11px;      }      #onetrust-pc-sdk .ot-grps-cntr *::-webkit-scrollbar-thumb,      #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-thumb {        border-radius: 10px;        background: #c1c1c1;      }      #onetrust-pc-sdk .ot-grps-cntr *,      #onetrust-pc-sdk .ot-pc-scrollbar {        scrollbar-arrow-color: #c1c1c1;        scrollbar-darkshadow-color: #c1c1c1;        scrollbar-face-color: #c1c1c1;        scrollbar-shadow-color: #c1c1c1;      }      #onetrust-pc-sdk .ot-pc-header {        height: auto;        padding: 10px;        display: block;        width: calc(100% - 20px);        min-height: 52px;        border-bottom: 1px solid #d8d8d8;        position: relative;      }      #onetrust-pc-sdk .ot-pc-logo {        vertical-align: middle;        width: 180px;      }      #onetrust-pc-sdk .ot-pc-logo.ot-pc-logo {        height: 40px;      }      #onetrust-pc-sdk .ot-title-cntr {        position: relative;        display: inline-block;        vertical-align: middle;        width: calc(100% - 190px);        padding-left: 10px;      }      #onetrust-pc-sdk .ot-optout-signal {        margin: 0.625rem 0.625rem 0.625rem 1.75rem;      }      #onetrust-pc-sdk .ot-always-active {        font-size: 0.813em;        line-height: 1.5;        font-weight: 700;        color: #3860be;      }      #onetrust-pc-sdk .ot-close-cntr {        float: right;        position: absolute;        right: -9px;        top: 50%;        transform: translateY(-50%);      }      #onetrust-pc-sdk #ot-pc-content {        position: relative;        overflow-y: auto;        overflow-x: hidden;      }      #onetrust-pc-sdk #ot-pc-content .ot-sdk-container {        margin-left: 0;      }      #onetrust-pc-sdk .ot-grps-cntr,      #onetrust-pc-sdk .ot-grps-cntr > * {        height: 100%;        overflow-y: auto;      }      #onetrust-pc-sdk .category-menu-switch-handler {        cursor: pointer;        border-left: 10px solid rgba(0, 0, 0, 0);        background-color: #f4f4f4;        border-bottom: 1px solid #d7d7d7;        padding-top: 12px;        padding-right: 5px;        padding-bottom: 12px;        padding-left: 12px;        overflow: hidden;      }      #onetrust-pc-sdk .category-menu-switch-handler h3,      #onetrust-pc-sdk .category-menu-switch-handler p[aria-level="3"] {        float: left;        text-align: left;        margin: 0;        color: dimgray;        line-height: 1.4;        font-size: 0.875em;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-active-menu {        border-left: 10px solid #68b631;        background-color: #fff;        border-bottom: none;        position: relative;      }      #onetrust-pc-sdk .ot-active-menu h3,      #onetrust-pc-sdk .ot-active-menu p[aria-level="3"] {        color: #263238;        font-weight: bold;      }      #onetrust-pc-sdk .ot-desc-cntr {        word-break: break-word;        word-wrap: break-word;        padding-top: 20px;        padding-right: 16px;        padding-bottom: 15px;      }      #onetrust-pc-sdk .ot-grp-desc {        word-break: break-word;        word-wrap: break-word;        text-align: left;        font-size: 0.813em;        line-height: 1.5;        margin: 0;      }      #onetrust-pc-sdk .ot-grp-desc * {        font-size: inherit;        line-height: inherit;      }      #onetrust-pc-sdk #ot-pc-desc a {        color: #3860be;        cursor: pointer;        font-size: 1em;      }      #onetrust-pc-sdk #ot-pc-desc a.privacy-notice-link,      #onetrust-pc-sdk #ot-pc-desc a.ot-imprint-handler {        margin-right: 8px;      }      #onetrust-pc-sdk #ot-pc-desc a:hover {        color: #1883fd;      }      #onetrust-pc-sdk #ot-pc-desc button {        margin-right: 8px;      }      #onetrust-pc-sdk #ot-pc-desc * {        font-size: inherit;      }      #onetrust-pc-sdk #ot-pc-desc ul li {        padding: 10px 0px;        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk #ot-pc-desc + .ot-link-btn {        display: none;      }      #onetrust-pc-sdk .ot-close-icon {        background-size: 12px;        background-repeat: no-repeat;        background-position: center;        height: 44px;        width: 44px;        display: inline-block;      }      #onetrust-pc-sdk .ot-tgl {        float: right;        position: relative;        z-index: 1;      }      #onetrust-pc-sdk .ot-tgl input:checked + .ot-switch .ot-switch-nob {        background-color: #468254;        border: 1px solid #fff;      }      #onetrust-pc-sdk        .ot-tgl        input:checked        + .ot-switch        .ot-switch-nob:before {        -webkit-transform: translateX(21px);        -ms-transform: translateX(21px);        transform: translateX(21px);        background-color: #fff;      }      #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch .ot-switch-nob {        box-shadow: 0 0 1px #2196f3;        outline-style: auto !important;        outline-width: 1px !important;      }      #onetrust-pc-sdk .ot-switch {        position: relative;        display: inline-block;        width: 45px;        height: 25px;        margin-bottom: 0;      }      #onetrust-pc-sdk .ot-switch-nob {        position: absolute;        cursor: pointer;        top: 0;        left: 0;        right: 0;        bottom: 0;        background-color: #767676;        border: 1px solid #ddd;        transition: all 0.2s ease-in 0s;        -moz-transition: all 0.2s ease-in 0s;        -o-transition: all 0.2s ease-in 0s;        -webkit-transition: all 0.2s ease-in 0s;        border-radius: 20px;      }      #onetrust-pc-sdk .ot-switch-nob:before {        position: absolute;        content: "";        height: 18px;        width: 18px;        bottom: 3px;        left: 2px;        background-color: #fff;        -webkit-transition: 0.4s;        transition: 0.4s;        border-radius: 20px;      }      #onetrust-pc-sdk .ot-chkbox {        z-index: 1;        position: relative;        float: left;      }      #onetrust-pc-sdk .ot-chkbox input {        width: 28px !important;        height: 28px !important;      }      #onetrust-pc-sdk .ot-chkbox input:checked ~ label::before {        background-color: #3860be;      }      #onetrust-pc-sdk .ot-chkbox input + label::after {        content: none;        color: #fff;      }      #onetrust-pc-sdk .ot-chkbox input:checked + label::after {        content: "";      }      #onetrust-pc-sdk .ot-chkbox input:focus + label::before {        outline-style: solid;        outline-width: 2px;        outline-style: auto;      }      #onetrust-pc-sdk .ot-chkbox input[aria-checked="mixed"] ~ label::before {        background-color: #3860be;      }      #onetrust-pc-sdk .ot-chkbox input[aria-checked="mixed"] + label::after {        content: "";      }      #onetrust-pc-sdk .ot-chkbox label {        position: relative;        padding-left: 30px;        display: flex;        align-items: center;        cursor: pointer;        min-height: 28px !important;      }      #onetrust-pc-sdk .ot-chkbox label::before,      #onetrust-pc-sdk .ot-chkbox label::after {        position: absolute;        content: "";        display: inline-block;        border-radius: 3px;      }      #onetrust-pc-sdk .ot-chkbox label::before {        height: 18px;        width: 18px;        border: 1px solid #3860be;        left: 0px;        left: 4px;        top: 4px;      }      #onetrust-pc-sdk .ot-chkbox label::after {        height: 5px;        width: 9px;        border-left: 3px solid;        border-bottom: 3px solid;        transform: rotate(-45deg);        -o-transform: rotate(-45deg);        -ms-transform: rotate(-45deg);        -webkit-transform: rotate(-45deg);        left: 8px;        top: 8px;      }      #onetrust-pc-sdk .ot-label-txt {        display: none;      }      #onetrust-pc-sdk .ot-fltr-opt .ot-label-txt {        display: inline-block;      }      #onetrust-pc-sdk .ot-chkbox input,      #onetrust-pc-sdk .ot-tgl input {        position: absolute;        opacity: 0;        width: 0;        height: 0;      }      #onetrust-pc-sdk .ot-arw-cntr {        float: right;        position: relative;        pointer-events: none;      }      #onetrust-pc-sdk .ot-arw {        width: 16px;        height: 16px;        margin-left: 5px;        color: dimgray;        display: inline-block;        vertical-align: middle;        -webkit-transition: all 150ms ease-in 0s;        -moz-transition: all 150ms ease-in 0s;        -o-transition: all 150ms ease-in 0s;        transition: all 150ms ease-in 0s;      }      #onetrust-pc-sdk input:checked ~ .ot-acc-hdr .ot-arw,      #onetrust-pc-sdk        button[aria-expanded="true"]        ~ .ot-acc-hdr        .ot-arw-cntr        svg {        transform: rotate(90deg);        -o-transform: rotate(90deg);        -ms-transform: rotate(90deg);        -webkit-transform: rotate(90deg);      }      #onetrust-pc-sdk .ot-label-status {        font-size: 0.75em;        position: relative;        top: 2px;        display: none;        padding-right: 5px;        float: left;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-label-status {        top: -6px;      }      #onetrust-pc-sdk .ot-fltr-opts {        min-height: 35px;      }      #onetrust-pc-sdk .ot-fltr-btns {        margin: 10px 15px 0 15px;      }      #onetrust-pc-sdk .ot-fltr-btns button {        padding: 12px 30px;      }      #onetrust-pc-sdk .ot-pc-footer {        position: absolute;        bottom: 0px;        width: 100%;        max-height: var(--ot-footer-space);        border-top: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-pc-footer button {        margin-top: 20px;        margin-bottom: 20px;        font-weight: 600;        font-size: 0.9em;        border-radius: 2px;        min-height: 40px;        height: auto;        line-height: normal;        padding: 10px 30px;        text-align: center;        white-space: normal;        text-wrap: wrap;      }      #onetrust-pc-sdk .ot-pc-footer .ot-btn-subcntr {        float: right;      }      #onetrust-pc-sdk .ot-pc-footer .ot-btn-subcntr button {        margin-left: 15px;        margin-right: 15px;      }      #onetrust-pc-sdk .ot-pc-footer .save-preference-btn-handler {        min-width: 155px;        background-color: #68b631;        color: #fff;        margin-left: 15px;        margin-right: 15px;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container {        display: flex;        flex-wrap: wrap;        justify-content: flex-end;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        button {        float: none;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        *[class*="ot-button-order-"]:nth-of-type(1) {        min-width: 155px;        margin-left: 15px;        margin-right: auto;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        *[class*="ot-button-order-"]:nth-of-type(2),      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container        *[class*="ot-button-order-"]:nth-of-type(3) {        margin-right: 15px;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container.ot-stack-buttons {        flex: 1;        width: auto;        gap: 0.5rem;        height: 100%;        padding: 0 30px;        flex-wrap: nowrap;        margin: 0.75rem 0;        align-items: center;        flex-direction: column;        justify-content: space-around;      }      #onetrust-pc-sdk        .ot-pc-footer        .ot-btn-container.ot-button-order-container.ot-stack-buttons        button {        width: 100%;        margin: 0 !important;      }      #onetrust-pc-sdk.ot-ftr-stacked {        --ot-footer-space: 210px;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer {        display: flex;        flex-direction: column;        height: auto;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button {        width: calc(100% - 33px);      }      #onetrust-pc-sdk.ot-ftr-stacked        .ot-pc-footer        button.save-preference-btn-handler,      #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button:not(:last-child) {        margin-bottom: 0;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr {        float: none;        text-align: center;      }      #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button:not(:last-child) {        margin-bottom: 0;      }      #onetrust-pc-sdk .ot-tab-desc {        margin-left: 3%;      }      #onetrust-pc-sdk .ot-grp-hdr1 {        display: inline-block;        width: 100%;        margin-bottom: 10px;      }      #onetrust-pc-sdk .ot-desc-cntr h4,      #onetrust-pc-sdk .ot-desc-cntr p[aria-level="4"] {        color: #263238;        display: inline-block;        vertical-align: middle;        margin: 0;        font-weight: bold;        font-size: 0.875em;        line-height: 1.3;        max-width: 80%;      }      #onetrust-pc-sdk .ot-desc-cntr p[aria-level="4"] {        max-width: 60%;      }      #onetrust-pc-sdk .ot-subgrps .ot-subgrp h5,      #onetrust-pc-sdk .ot-subgrps .ot-subgrp p[aria-level="5"] {        top: 0;        max-width: unset;      }      #onetrust-pc-sdk #ot-pvcy-hdr {        margin-bottom: 10px;      }      #onetrust-pc-sdk .ot-vlst-cntr {        overflow: hidden;      }      #onetrust-pc-sdk .category-vendors-list-handler,      #onetrust-pc-sdk .category-host-list-handler,      #onetrust-pc-sdk .category-vendors-list-handler + a {        display: block;        float: left;        color: #3860be;        font-size: 0.813em;        font-weight: 400;        line-height: 1.1;        cursor: pointer;        margin: 5px 0px;      }      #onetrust-pc-sdk .category-vendors-list-handler:hover,      #onetrust-pc-sdk .category-host-list-handler:hover,      #onetrust-pc-sdk .category-vendors-list-handler + a:hover {        text-decoration-line: underline;      }      #onetrust-pc-sdk .ot-vlst-cntr svg.ot-ext-lnk,      #onetrust-pc-sdk .ot-ven-hdr svg.ot-ext-lnk,      #onetrust-pc-sdk .ot-host-hdr svg.ot-ext-lnk,      #onetrust-pc-sdk .ot-cat-grp svg.ot-ext-lnk {        display: inline-block;        height: 13px;        width: 13px;        background-repeat: no-repeat;        margin-left: 1px;        cursor: pointer;        vertical-align: middle;      }      #onetrust-pc-sdk .ot-ven-hdr svg.ot-ext-lnk {        margin-bottom: -1px;      }      #onetrust-pc-sdk .category-host-list-handler,      #onetrust-pc-sdk .ot-vlst-cntr,      #onetrust-pc-sdk #ot-pc-desc + .category-vendors-list-handler {        margin-top: 8px;      }      #onetrust-pc-sdk .ot-grp-hdr1 + .ot-vlst-cntr {        margin-top: 0px;        margin-bottom: 10px;      }      #onetrust-pc-sdk .ot-always-active-group h3.ot-cat-header,      #onetrust-pc-sdk        .ot-always-active-group        p[aria-level="3"].ot-cat-header        .ot-subgrp.ot-always-active-group        > h4,      #onetrust-pc-sdk .ot-subgrp.ot-always-active-group > p[aria-level="4"] {        max-width: 70%;      }      #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr {        max-width: 28%;      }      #onetrust-pc-sdk .ot-grp-desc ul,      #onetrust-pc-sdk li.ot-subgrp p ul {        margin: 0px;        margin-left: 15px;        padding-bottom: 8px;      }      #onetrust-pc-sdk .ot-grp-desc ul li,      #onetrust-pc-sdk li.ot-subgrp p ul li {        font-size: inherit;        padding-top: 8px;        display: list-item;        list-style: disc;      }      #onetrust-pc-sdk ul.ot-subgrps {        margin: 0;        font-size: inherit;      }      #onetrust-pc-sdk ul.ot-subgrps li {        padding: 0;        border: none;        position: relative;      }      #onetrust-pc-sdk ul.ot-subgrps li h5,      #onetrust-pc-sdk ul.ot-subgrps li p {        font-size: 0.82em;        line-height: 1.4;      }      #onetrust-pc-sdk ul.ot-subgrps li p {        color: dimgray;        clear: both;        float: left;        margin-top: 10px;        margin-bottom: 0;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk ul.ot-subgrps li h5,      #onetrust-pc-sdk ul.ot-subgrps li p[aria-level="5"] {        color: #263238;        font-weight: bold;        margin-bottom: 0;        margin-top: 0;        float: left;        position: relative;        top: 3px;      }      #onetrust-pc-sdk li.ot-subgrp {        margin-left: 30px;        display: inline-block;        width: calc(100% - 30px);      }      #onetrust-pc-sdk .ot-subgrp-tgl {        float: right;      }      #onetrust-pc-sdk .ot-subgrp-tgl.ot-always-active-subgroup {        width: auto;      }      #onetrust-pc-sdk .ot-pc-footer-logo {        height: 30px;        width: 100%;        text-align: right;        background: #f4f4f4;        border-radius: 0 0 2px 2px;      }      #onetrust-pc-sdk .ot-pc-footer-logo a {        display: inline-block;        margin-top: 5px;        margin-right: 10px;      }      #onetrust-pc-sdk #ot-pc-title {        margin: 0px;        overflow: hidden;        position: relative;        line-height: 1.2;        max-height: 2.4em;        padding-right: 1em;        font-size: 1.37em;        text-overflow: ellipsis;        white-space: nowrap;        display: block;        max-width: 90%;      }      #onetrust-pc-sdk #ot-pc-title.ot-pc-title-shrink {        max-width: 70%;      }      #onetrust-pc-sdk #ot-pc-title-mobile {        display: none !important;      }      #onetrust-pc-sdk #ot-pc-lst {        width: 100%;        position: relative;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-hdr {        padding-top: 17px;        padding-right: 15px;        padding-bottom: 17px;        padding-left: 20px;        display: inline-block;        width: calc(100% - 35px);        vertical-align: middle;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-txt {        padding-top: 6px;        padding-right: 15px;        padding-bottom: 10px;        padding-left: 20px;      }      #onetrust-pc-sdk .ot-lst-cntr {        height: 100%;      }      #onetrust-pc-sdk #ot-pc-hdr {        padding-top: 15px;        padding-right: 30px;        padding-bottom: 15px;        padding-left: 20px;        display: inline-block;        width: calc(100% - 50px);        height: 20px;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk #ot-pc-hdr input {        height: 32px;        width: 100%;        border-radius: 50px;        font-size: 0.8em;        padding-right: 35px;        padding-left: 15px;        float: left;      }      #onetrust-pc-sdk #ot-pc-hdr input::placeholder {        color: #707070;        font-style: italic;      }      #onetrust-pc-sdk #ot-lst-cnt {        height: calc(100% - 86px);        padding-left: 30px;        padding-right: 27px;        padding-top: 20px;        margin-top: 8px;        margin-right: 3px;        margin-bottom: 4px;        margin-left: 0;        overflow-x: hidden;        overflow-y: auto;        transform: translate3d(0, 0, 0);      }      #onetrust-pc-sdk #ot-back-arw {        height: 12px;        width: 12px;      }      #onetrust-pc-sdk #ot-lst-title {        display: inline-block;        font-size: 1em;      }      #onetrust-pc-sdk #ot-lst-title h3,      #onetrust-pc-sdk #ot-lst-title p[aria-level="3"] {        color: dimgray;        font-weight: bold;        margin-left: 10px;        display: inline-block;        font-size: 1em;      }      #onetrust-pc-sdk #ot-lst-title h3 *,      #onetrust-pc-sdk #ot-lst-title p[aria-level="3"] * {        font-size: inherit;      }      #onetrust-pc-sdk .ot-lst-subhdr {        float: right;        position: relative;        bottom: 6px;      }      #onetrust-pc-sdk #ot-search-cntr {        display: inline-block;        vertical-align: middle;        position: relative;        width: 300px;      }      #onetrust-pc-sdk #ot-search-cntr svg {        position: absolute;        right: 0px;        width: 30px;        height: 30px;        font-size: 1em;        line-height: 1;        top: 2px;      }      #onetrust-pc-sdk #ot-fltr-cntr {        display: inline-block;        position: relative;        margin-left: 20px;        vertical-align: middle;        font-size: 0;      }      #onetrust-pc-sdk #ot-filter-list-header {        margin-top: 15px;        margin-bottom: 10px;        float: left;        max-width: 150px;        text-decoration: none;        color: #3860be;        font-size: 0.9em;        font-weight: bold;        background-color: rgba(0, 0, 0, 0);        border-color: rgba(0, 0, 0, 0);        padding: 1px 1px 1px 15px;        overflow: hidden;        text-overflow: ellipsis;        white-space: nowrap;      }      #onetrust-pc-sdk #filter-btn-handler {        background-color: #3860be;        border-radius: 17px;        -moz-transition: 0.1s ease;        -o-transition: 0.1s ease;        -webkit-transition: 1s ease;        transition: 0.1s ease;        width: 32px;        height: 32px;        padding: 0;        margin: 0;        position: relative;      }      #onetrust-pc-sdk #filter-btn-handler svg {        cursor: pointer;        width: 15px;        height: 15px;        position: absolute;        left: 50%;        top: 50%;        transform: translate(-50%, -50%);        padding-top: 5px;      }      #onetrust-pc-sdk #filter-btn-handler path {        fill: #fff;      }      #onetrust-pc-sdk #ot-sel-blk {        min-width: 200px;        min-height: 30px;        padding-left: 20px;      }      #onetrust-pc-sdk #ot-selall-vencntr,      #onetrust-pc-sdk #ot-selall-adtlvencntr {        float: left;        height: 100%;      }      #onetrust-pc-sdk #ot-selall-vencntr label,      #onetrust-pc-sdk #ot-selall-adtlvencntr label {        height: 100%;        padding-left: 0;      }      #onetrust-pc-sdk #ot-selall-hostcntr {        width: 21px;        height: 21px;        position: relative;        left: 20px;      }      #onetrust-pc-sdk #ot-selall-vencntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-adtlvencntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-licntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-hostcntr.line-through label::after,      #onetrust-pc-sdk #ot-selall-gnvencntr.line-through label::after {        height: auto;        border-left: 0;        left: 9px;        top: 12px;        transform: none;        -o-transform: none;        -ms-transform: none;        -webkit-transform: none;      }      #onetrust-pc-sdk .ot-ven-name,      #onetrust-pc-sdk .ot-host-name {        color: #2c3643;        font-weight: bold;        font-size: 0.813em;        line-height: 1.2;        margin: 0;        height: auto;        text-align: left;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-ven-name *,      #onetrust-pc-sdk .ot-host-name * {        font-size: inherit;      }      #onetrust-pc-sdk .ot-host-desc {        font-size: 0.69em;        line-height: 1.4;        margin-top: 5px;        margin-bottom: 5px;        color: dimgray;      }      #onetrust-pc-sdk .ot-host-name > a {        text-decoration: underline;        position: relative;        z-index: 2;        margin-bottom: 5px;        font-weight: bold;      }      #onetrust-pc-sdk .ot-host-hdr {        float: left;        width: calc(100% - 50px);        pointer-events: none;        position: relative;        z-index: 1;      }      #onetrust-pc-sdk .ot-host-hdr .ot-host-name {        pointer-events: none;      }      #onetrust-pc-sdk .ot-host-hdr a {        pointer-events: initial;      }      #onetrust-pc-sdk .ot-host-hdr .ot-host-name ~ a {        margin-top: 5px;        font-size: 0.813em;        text-decoration: underline;      }      #onetrust-pc-sdk .ot-ven-hdr {        width: 88%;        float: right;      }      #onetrust-pc-sdk input:focus + .ot-acc-hdr {        outline: #000 solid 1px !important;      }      #onetrust-pc-sdk #ot-selall-hostcntr input[type="checkbox"],      #onetrust-pc-sdk #ot-selall-vencntr input[type="checkbox"],      #onetrust-pc-sdk #ot-selall-adtlvencntr input[type="checkbox"] {        position: absolute;      }      #onetrust-pc-sdk .ot-host-item .ot-chkbox {        float: left;      }      #onetrust-pc-sdk.ot-addtl-vendors        #ot-lst-cnt:not(.ot-host-cnt)        .ot-sel-all-hdr {        right: 38px;      }      #onetrust-pc-sdk.ot-addtl-vendors        #ot-lst-cnt:not(.ot-host-cnt)        #ot-sel-blk {        background-color: #f9f9fc;        border: 1px solid #e2e2e2;        width: auto;        padding-bottom: 5px;        padding-top: 5px;      }      #onetrust-pc-sdk.ot-addtl-vendors        #ot-lst-cnt:not(.ot-host-cnt)        .ot-sel-all-chkbox {        right: 2px;        width: auto;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr {        position: relative;        border-left: 1px solid #e2e2e2;        border-right: 1px solid #e2e2e2;        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr input {        z-index: 1;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr > .ot-acc-hdr {        background: #f9f9fc;        padding-top: 10px;        padding-bottom: 10px;        background-color: #f9f9fc;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr > .ot-acc-hdr input {        z-index: 2;      }      #onetrust-pc-sdk        #ot-pc-lst        .ot-acc-cntr        > input[type="checkbox"]:checked        ~ .ot-acc-hdr {        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk        #ot-pc-lst        .ot-acc-cntr        > input[type="checkbox"][aria-checked="mixed"]        ~ .ot-acc-hdr {        border-bottom: 1px solid #e2e2e2;      }      #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr .ot-addtl-venbox {        display: none;      }      #onetrust-pc-sdk #ot-addtl-venlst .ot-tgl-cntr {        margin-right: 13px;      }      #onetrust-pc-sdk .ot-vensec-title {        font-size: 0.813em;        display: inline-block;      }      #onetrust-pc-sdk .ot-ven-item > button:focus,      #onetrust-pc-sdk .ot-host-item > button:focus,      #onetrust-pc-sdk .ot-acc-cntr > button:focus {        outline: #000 solid 2px;      }      #onetrust-pc-sdk .ot-ven-item > button,      #onetrust-pc-sdk .ot-host-item > button,      #onetrust-pc-sdk .ot-acc-cntr > button {        position: absolute;        cursor: pointer;        width: 100%;        height: 100%;        border: 0;        opacity: 0;        margin: 0;        top: 0;        left: 0;      }      #onetrust-pc-sdk .ot-ven-item > button ~ .ot-acc-hdr,      #onetrust-pc-sdk .ot-host-item > button ~ .ot-acc-hdr,      #onetrust-pc-sdk .ot-acc-cntr > button ~ .ot-acc-hdr {        cursor: pointer;      }      #onetrust-pc-sdk        .ot-ven-item        > button[aria-expanded="false"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-host-item        > button[aria-expanded="false"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-acc-cntr        > button[aria-expanded="false"]        ~ .ot-acc-txt {        margin-top: 0;        max-height: 0;        opacity: 0;        overflow: hidden;        width: 100%;        transition: 0.25s ease-out;        display: none;      }      #onetrust-pc-sdk        .ot-ven-item        > button[aria-expanded="true"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-host-item        > button[aria-expanded="true"]        ~ .ot-acc-txt,      #onetrust-pc-sdk        .ot-acc-cntr        > button[aria-expanded="true"]        ~ .ot-acc-txt {        transition: 0.1s ease-in;        display: block;      }      #onetrust-pc-sdk .ot-ven-item ul {        list-style: none inside;        font-size: 100%;        margin: 0;      }      #onetrust-pc-sdk .ot-ven-item ul li {        margin: 0 !important;        padding: 0;        border: none !important;      }      #onetrust-pc-sdk .ot-hide-acc > button {        pointer-events: none;      }      #onetrust-pc-sdk .ot-hide-acc .ot-arw-cntr > * {        visibility: hidden;      }      #onetrust-pc-sdk #ot-ven-lst,      #onetrust-pc-sdk #ot-host-lst,      #onetrust-pc-sdk #ot-addtl-venlst,      #onetrust-pc-sdk #ot-gn-venlst {        width: 100%;      }      #onetrust-pc-sdk #ot-ven-lst li,      #onetrust-pc-sdk #ot-host-lst li,      #onetrust-pc-sdk #ot-addtl-venlst li,      #onetrust-pc-sdk #ot-gn-venlst li {        border: 1px solid #d7d7d7;        border-radius: 2px;        position: relative;        margin-top: 10px;      }      #onetrust-pc-sdk #ot-gn-venlst li.ot-host-info {        padding: 0.5rem;        overflow-y: hidden;      }      #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {        width: 65%;      }      #onetrust-pc-sdk #ot-host-lst .ot-tgl-cntr {        width: 65%;        float: left;      }      #onetrust-pc-sdk label {        margin-bottom: 0;      }      #onetrust-pc-sdk .ot-host-notice {        float: right;      }      #onetrust-pc-sdk .ot-ven-link,      #onetrust-pc-sdk .ot-ven-legclaim-link,      #onetrust-pc-sdk .ot-host-expand {        color: dimgray;        font-size: 0.75em;        line-height: 0.9;        display: inline-block;      }      #onetrust-pc-sdk .ot-ven-link *,      #onetrust-pc-sdk .ot-ven-legclaim-link *,      #onetrust-pc-sdk .ot-host-expand * {        font-size: inherit;      }      #onetrust-pc-sdk .ot-ven-link,      #onetrust-pc-sdk .ot-ven-legclaim-link {        position: relative;        z-index: 2;      }      #onetrust-pc-sdk .ot-ven-link:hover,      #onetrust-pc-sdk .ot-ven-legclaim-link:hover {        text-decoration: underline;      }      #onetrust-pc-sdk .ot-ven-dets {        border-radius: 2px;        background-color: #f8f8f8;      }      #onetrust-pc-sdk .ot-ven-dets li:first-child p:first-child {        border-top: none;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:not(:first-child) {        border-top: 1px solid #ddd !important;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n + 3) p {        display: inline-block;      }      #onetrust-pc-sdk        .ot-ven-dets        .ot-ven-disc:nth-child(n + 3)        p:nth-of-type(odd) {        width: 30%;      }      #onetrust-pc-sdk        .ot-ven-dets        .ot-ven-disc:nth-child(n + 3)        p:nth-of-type(even) {        width: 50%;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p,      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h5 {        padding-top: 5px;        padding-bottom: 5px;        display: block;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h5,      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p[aria-level="5"] {        display: inline-block;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p:nth-last-child(-n + 1) {        padding-bottom: 10px;      }      #onetrust-pc-sdk        .ot-ven-dets        .ot-ven-disc        p:nth-child(-n + 2):not(.disc-pur):not([role="heading"]) {        padding-top: 10px;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur-cont {        display: inline;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur {        position: relative;        width: 50% !important;        word-break: break-word;        word-wrap: break-word;        left: calc(30% + 17px);      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc .disc-pur:nth-child(-n + 1) {        position: static;      }      #onetrust-pc-sdk .ot-ven-dets p,      #onetrust-pc-sdk .ot-ven-dets h5,      #onetrust-pc-sdk .ot-ven-dets span {        font-size: 0.69em;        text-align: left;        vertical-align: middle;        word-break: break-word;        word-wrap: break-word;        margin: 0;        padding-bottom: 10px;        padding-left: 15px;        color: #2e3644;      }      #onetrust-pc-sdk .ot-ven-dets h5,      #onetrust-pc-sdk .ot-ven-dets p[aria-level="5"] {        padding-top: 5px;        line-height: 1.5;      }      #onetrust-pc-sdk .ot-ven-dets span {        color: dimgray;        padding: 0;        vertical-align: baseline;      }      #onetrust-pc-sdk .ot-ven-dets .ot-ven-pur h5,      #onetrust-pc-sdk .ot-ven-dets .ot-ven-pur p[aria-level="5"] {        border-top: 1px solid #e9e9e9;        border-bottom: 1px solid #e9e9e9;        padding-bottom: 5px;        margin-bottom: 5px;        font-weight: bold;      }      #onetrust-pc-sdk .ot-host-opt {        display: inline-block;        width: 100%;        margin: 0;        font-size: inherit;      }      #onetrust-pc-sdk .ot-host-opt li > dl {        font-size: 0.81em;        padding: 5px 0;        margin: 5px 0;        display: flex;      }      #onetrust-pc-sdk .ot-host-opt li > dl dt {        width: 30%;        float: left;      }      #onetrust-pc-sdk .ot-host-opt li > dl dd {        width: 70%;        float: left;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk #ot-host-lst li.ot-host-info {        border: none;        font-size: 0.8em;        color: dimgray;        float: left;        text-align: left;        padding: 10px;        margin-bottom: 10px;        width: calc(100% - 10px);        background-color: #f8f8f8;      }      #onetrust-pc-sdk #ot-host-lst li.ot-host-info a {        color: dimgray;      }      #onetrust-pc-sdk #ot-host-lst li.ot-host-info > div {        overflow: auto;      }      #onetrust-pc-sdk #no-results {        text-align: center;        margin-top: 30px;      }      #onetrust-pc-sdk #no-results p {        font-size: 1em;        color: #2e3644;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk #no-results p span {        font-weight: bold;      }      #onetrust-pc-sdk .ot-tgl-cntr {        display: inline-block;        vertical-align: middle;      }      #onetrust-pc-sdk .ot-arw-cntr,      #onetrust-pc-sdk .ot-tgl-cntr {        float: right;      }      #onetrust-pc-sdk .ot-desc-cntr {        padding-top: 0px;        margin-top: 20px;        padding-right: 0px;        border-radius: 3px;        overflow: hidden;        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-desc-cntr:focus,      #onetrust-pc-sdk .ot-desc-cntr:active,      #onetrust-pc-sdk .ot-desc-cntr:focus-visible {        outline: 2px solid #101010;        border-radius: 2px;      }      #onetrust-pc-sdk .ot-leg-border-color {        border: 1px solid #e9e9e9;      }      #onetrust-pc-sdk .ot-leg-border-color .ot-subgrp-cntr {        border-top: 1px solid #e9e9e9;        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-category-desc {        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-grp-hdr1 {        padding-left: 10px;        width: calc(100% - 20px);        padding-top: 10px;        margin-bottom: 0px;        padding-bottom: 8px;      }      #onetrust-pc-sdk .ot-subgrp-cntr {        padding-top: 10px;      }      #onetrust-pc-sdk .ot-desc-cntr > *:not(.ot-grp-hdr1) {        padding-left: 10px;        padding-right: 10px;      }      #onetrust-pc-sdk .ot-pli-hdr {        overflow: hidden;        padding-top: 7.5px;        padding-bottom: 7.5px;        background-color: #f8f8f8;        border: none;        border-bottom: 1px solid #e9e9e9;      }      #onetrust-pc-sdk .ot-pli-hdr span:first-child {        text-align: left;        max-width: 80px;        padding-right: 5px;      }      #onetrust-pc-sdk .ot-pli-hdr span:last-child {        padding-right: 20px;        text-align: center;      }      #onetrust-pc-sdk .ot-li-title {        float: right;        font-size: 0.813em;      }      #onetrust-pc-sdk .ot-desc-cntr .ot-tgl-cntr:first-of-type,      #onetrust-pc-sdk .ot-cat-header + .ot-tgl {        padding-left: 7px;        padding-right: 7px;      }      #onetrust-pc-sdk        .ot-always-active-group        .ot-grp-hdr1        .ot-tgl-cntr:first-of-type {        padding-left: 0px;      }      #onetrust-pc-sdk .ot-cat-header,      #onetrust-pc-sdk .ot-subgrp h4,      #onetrust-pc-sdk .ot-subgrp p[aria-level="4"] {        max-width: calc(100% - 133px);      }      #onetrust-pc-sdk #ot-lst-cnt #ot-sel-blk {        width: 100%;        display: inline-block;        padding: 0;      }      #onetrust-pc-sdk .ot-sel-all {        display: inline-block;        width: 100%;      }      #onetrust-pc-sdk .ot-sel-all-hdr,      #onetrust-pc-sdk .ot-sel-all-chkbox {        width: 100%;        float: right;        position: relative;      }      #onetrust-pc-sdk .ot-sel-all-chkbox {        z-index: 1;      }      #onetrust-pc-sdk :not(.ot-hosts-ui) .ot-sel-all-hdr,      #onetrust-pc-sdk :not(.ot-hosts-ui) .ot-sel-all-chkbox {        right: 23px;        width: calc(100% - 23px);      }      #onetrust-pc-sdk .ot-consent-hdr,      #onetrust-pc-sdk .ot-li-hdr {        float: right;        font-size: 0.813em;        position: relative;        line-height: normal;        text-align: center;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-hosts-ui .ot-consent-hdr {        float: left;        position: relative;        left: 5px;      }      #onetrust-pc-sdk .ot-li-hdr {        max-width: 100px;        margin-right: 10px;      }      #onetrust-pc-sdk .ot-consent-hdr {        max-width: 55px;      }      #onetrust-pc-sdk .ot-ven-ctgl {        margin-left: 10px;      }      #onetrust-pc-sdk .ot-ven-litgl {        margin-right: 55px;      }      #onetrust-pc-sdk .ot-ven-litgl.ot-ven-litgl-only {        margin-right: 86px;      }      #onetrust-pc-sdk .ot-ven-ctgl,      #onetrust-pc-sdk .ot-ven-litgl,      #onetrust-pc-sdk .ot-ven-gvctgl {        float: left;      }      #onetrust-pc-sdk .ot-ven-ctgl label,      #onetrust-pc-sdk .ot-ven-litgl label,      #onetrust-pc-sdk .ot-ven-gvctgl label {        width: 22px;        padding: 0;      }      #onetrust-pc-sdk #ot-selall-licntr {        display: block;        width: 21px;        height: 21px;        position: relative;        float: right;        right: 80px;      }      #onetrust-pc-sdk #ot-selall-licntr input {        position: absolute;      }      #onetrust-pc-sdk #ot-selall-vencntr,      #onetrust-pc-sdk #ot-selall-adtlvencntr,      #onetrust-pc-sdk #ot-selall-gnvencntr {        float: right;        width: 21px;        height: 21px;        position: relative;        right: 15px;      }      #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {        float: right;        width: auto;      }      #onetrust-pc-sdk .ot-ven-hdr {        float: left;        width: 60%;      }      #onetrust-pc-sdk #vdr-lst-dsc {        font-size: 0.812em;        line-height: 1.5;        padding: 10px 15px 5px 15px;      }      #onetrust-pc-sdk #ot-anchor {        border: 12px solid rgba(0, 0, 0, 0);        display: none;        position: absolute;        z-index: 2147483647;        top: 40px;        right: 35px;        transform: rotate(45deg);        -o-transform: rotate(45deg);        -ms-transform: rotate(45deg);        -webkit-transform: rotate(45deg);        background-color: #fff;        -webkit-box-shadow: -3px -3px 5px -2px #c7c5c7;        -moz-box-shadow: -3px -3px 5px -2px #c7c5c7;        box-shadow: -3px -3px 5px -2px #c7c5c7;      }      #onetrust-pc-sdk #ot-fltr-modal {        width: 300px;        position: absolute;        z-index: 2147483646;        top: 46px;        height: 90%;        max-height: 350px;        display: none;        -moz-transition: 0.2s ease;        -o-transition: 0.2s ease;        -webkit-transition: 2s ease;        transition: 0.2s ease;        opacity: 1;        right: 0;      }      #onetrust-pc-sdk #ot-fltr-modal button {        max-width: 200px;        line-height: 1;        word-break: break-word;        white-space: normal;        height: auto;        font-weight: bold;      }      #onetrust-pc-sdk #ot-fltr-cnt {        background-color: #fff;        margin: 5px;        border-radius: 3px;        height: 100%;        margin-right: 10px;        padding-right: 10px;        -webkit-box-shadow: 0px 0px 12px 2px #c7c5c7;        -moz-box-shadow: 0px 0px 12px 2px #c7c5c7;        box-shadow: 0px 0px 12px 2px #c7c5c7;      }      #onetrust-pc-sdk .ot-fltr-scrlcnt {        overflow-y: auto;        overflow-x: hidden;        clear: both;        max-height: calc(100% - 60px);      }      #onetrust-pc-sdk .ot-fltr-opt {        margin-bottom: 5px;        margin-left: 15px;        min-height: 20px;        clear: both;      }      #onetrust-pc-sdk .ot-fltr-opt .ot-chkbox {        float: none;      }      #onetrust-pc-sdk .ot-fltr-opt span {        cursor: pointer;        color: dimgray;        font-size: 0.8em;        line-height: 1.1;        font-weight: normal;      }      #onetrust-pc-sdk #clear-filters-handler {        float: right;        margin-top: 15px;        margin-bottom: 10px;        text-decoration: none;        color: #3860be;        font-size: 0.9em;        border: none;        padding: 1px;      }      #onetrust-pc-sdk #clear-filters-handler:hover {        color: #1883fd;      }      #onetrust-pc-sdk #clear-filters-handler:focus {        outline: #000 solid 1px;      }      #onetrust-pc-sdk #filter-apply-handler {        margin-right: 10px;      }      #onetrust-pc-sdk .ot-grp-desc + .ot-leg-btn-container {        margin-top: 0;      }      #onetrust-pc-sdk .ot-leg-btn-container {        display: inline-block;        width: 100%;        margin-top: 10px;      }      #onetrust-pc-sdk .ot-leg-btn-container button {        height: auto;        padding: 6.5px 8px;        margin-bottom: 0;        line-height: normal;        letter-spacing: 0;      }      #onetrust-pc-sdk .ot-leg-btn-container svg {        display: none;        height: 14px;        width: 14px;        padding-right: 5px;        vertical-align: sub;      }      #onetrust-pc-sdk .ot-active-leg-btn {        cursor: default;        pointer-events: none;      }      #onetrust-pc-sdk .ot-active-leg-btn svg {        display: inline-block;      }      #onetrust-pc-sdk .ot-remove-objection-handler {        border: none;        text-decoration: underline;        padding: 0;        font-size: 0.82em;        font-weight: 600;        line-height: 1.4;        padding-left: 10px;      }      #onetrust-pc-sdk .ot-obj-leg-btn-handler span {        font-weight: bold;        text-align: center;        font-size: 0.91em;        line-height: 1.5;      }      #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {        border: none;        height: auto;        line-height: 1.5;        text-decoration: underline;        font-size: 0.69em;        background: none;        width: auto;      }      #onetrust-pc-sdk.ot-close-btn-link .ot-close-cntr {        right: 5px;        top: 5px;        transform: none;      }      #onetrust-pc-sdk .ot-grps-cntr {        overflow-y: hidden;      }      #onetrust-pc-sdk .ot-cat-header {        float: left;        font-weight: 600;        font-size: 0.875em;        line-height: 1.5;        max-width: 90%;        vertical-align: middle;      }      #onetrust-pc-sdk .ot-vnd-item > button:focus {        outline: #000 solid 2px;      }      #onetrust-pc-sdk .ot-vnd-item > button {        position: absolute;        cursor: pointer;        width: 100%;        height: 100%;        margin: 0;        top: 0;        left: 0;        z-index: 1;        max-width: none;        border: none;      }      #onetrust-pc-sdk        .ot-vnd-item        > button[aria-expanded="false"]        ~ .ot-acc-txt {        margin-top: 0;        max-height: 0;        opacity: 0;        overflow: hidden;        width: 100%;        transition: 0.25s ease-out;        display: none;      }      #onetrust-pc-sdk        .ot-vnd-item        > button[aria-expanded="true"]        ~ .ot-acc-txt {        transition: 0.1s ease-in;        margin-top: 10px;        width: 100%;        overflow: auto;        display: block;      }      #onetrust-pc-sdk        .ot-vnd-item        > button[aria-expanded="true"]        ~ .ot-acc-grpcntr {        width: auto;        margin-top: 0px;        padding-bottom: 10px;      }      #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item {        position: relative;        border-radius: 2px;        margin: 0;        padding: 0;        border: 1px solid #d8d8d8;        border-top: none;        width: calc(100% - 2px);        float: left;      }      #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type {        margin-top: 10px;        border-top: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:first-child {        margin-top: 10px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:last-child,      #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr:last-child {        margin-bottom: 5px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {        padding-top: 11.5px;        padding-bottom: 11.5px;        padding-left: 20px;        padding-right: 20px;        width: calc(100% - 40px);        display: inline-block;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt {        width: 100%;        padding: 0;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr {        padding-left: 20px;        padding-right: 15px;        padding-bottom: 0;        width: calc(100% - 35px);      }      #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp {        padding-right: 5px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr {        z-index: 1;        position: relative;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header + .ot-arw-cntr {        position: absolute;        top: 50%;        transform: translateY(-50%);        right: 20px;        margin-top: -2px;      }      #onetrust-pc-sdk        .ot-accordion-layout        .ot-cat-header        + .ot-arw-cntr        .ot-arw {        width: 15px;        height: 20px;        margin-left: 5px;        color: dimgray;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header {        float: none;        color: #2e3644;        margin: 0;        display: inline-block;        height: auto;        word-wrap: break-word;        min-height: inherit;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,      #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr {        padding-left: 20px;        width: calc(100% - 20px);        display: inline-block;        margin-top: 0;        padding-bottom: 2px;      }      #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {        position: relative;        min-height: 25px;      }      #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl,      #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-always-active {        position: absolute;        top: 50%;        transform: translateY(-50%);        right: 20px;      }      #onetrust-pc-sdk .ot-accordion-layout h4 ~ .ot-tgl + .ot-tgl {        right: 95px;      }      #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler,      #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler + a {        margin-top: 5px;      }      #onetrust-pc-sdk #ot-pc-lst {        display: flex;        flex-direction: column;      }      #onetrust-pc-sdk #ot-lst-cnt {        margin-top: 1rem;        max-height: calc(100% - 100px);      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info-cntr {        border: 1px solid #d8d8d8;        padding: 0.75rem 2rem;        padding-bottom: 0;        width: auto;        margin-top: 0.5rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info {        margin-bottom: 1rem;        padding-left: 0.75rem;        padding-right: 0.75rem;        display: flex;        flex-direction: column;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info > div {        display: flex;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*="DPOEmail"] {        border-top: 1px solid #d8d8d8;        padding-top: 1rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*="DPOLink"] {        border-bottom: 1px solid #d8d8d8;        padding-bottom: 1rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-lbl {        font-weight: bold;        font-size: 0.85em;        margin-bottom: 0.5rem;      }      #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-cnt {        margin-left: 0.5rem;        font-weight: 500;        font-size: 0.85rem;      }      #onetrust-pc-sdk .ot-vs-list,      #onetrust-pc-sdk .ot-vnd-serv {        width: auto;        padding: 1rem 1.25rem;        padding-bottom: 0;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr {        padding-bottom: 0.75rem;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr {        font-weight: 600;        font-size: 0.95em;        line-height: 2;        margin-left: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item {        border: none;        margin: 0;        padding: 0;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button {        outline: none;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button[aria-expanded="true"],      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button[aria-expanded="true"] {        border-bottom: none;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:first-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:first-child {        margin-top: 0.25rem;        border-top: unset;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child {        margin-bottom: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child button,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child button {        border-bottom: none;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info-cntr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info-cntr {        border: 1px solid #d8d8d8;        padding: 0.75rem 1.75rem;        padding-bottom: 0;        width: auto;        margin-top: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info {        margin-bottom: 1rem;        padding-left: 0.75rem;        padding-right: 0.75rem;        display: flex;        flex-direction: column;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info > div,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info > div {        display: flex;      }      #onetrust-pc-sdk        .ot-vs-list        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOEmail"],      #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOEmail"] {        border-top: 1px solid #d8d8d8;        padding-top: 1rem;      }      #onetrust-pc-sdk        .ot-vs-list        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOLink"],      #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-vnd-info[data-vnd-info-key*="DPOLink"] {        border-bottom: 1px solid #d8d8d8;        padding-bottom: 1rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-lbl,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-lbl {        font-weight: bold;        font-size: 0.85em;        margin-bottom: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-cnt,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-cnt {        margin-left: 0.5rem;        font-weight: 500;        font-size: 0.85rem;      }      #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt,      #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt {        padding-left: 40px;      }      #onetrust-pc-sdk        .ot-vs-list.ot-vnd-subgrp-cnt        .ot-vnd-serv-hdr-cntr        .ot-vnd-serv-hdr,      #onetrust-pc-sdk        .ot-vnd-serv.ot-vnd-subgrp-cnt        .ot-vnd-serv-hdr-cntr        .ot-vnd-serv-hdr {        font-size: 0.8em;      }      #onetrust-pc-sdk .ot-vs-list.ot-vnd-subgrp-cnt .ot-cat-header,      #onetrust-pc-sdk .ot-vnd-serv.ot-vnd-subgrp-cnt .ot-cat-header {        font-size: 0.8em;      }      #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv {        margin-bottom: 1rem;        padding: 1rem 0.95rem;      }      #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv .ot-vnd-serv-hdr-cntr {        padding-bottom: 0.75rem;        border-bottom: 1px solid #d8d8d8;      }      #onetrust-pc-sdk        .ot-subgrp-cntr        .ot-vnd-serv        .ot-vnd-serv-hdr-cntr        .ot-vnd-serv-hdr {        font-weight: 700;        font-size: 0.8em;        line-height: 20px;        margin-left: 0.82rem;      }      #onetrust-pc-sdk .ot-subgrp-cntr .ot-cat-header {        font-weight: 700;        font-size: 0.8em;        line-height: 20px;      }      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-vnd-serv        .ot-vnd-lst-cont        .ot-accordion-layout        .ot-acc-hdr        div.ot-chkbox {        margin-left: 0.82rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr,      #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr,      #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr {        padding: 0.7rem 0;        margin: 0;        display: flex;        width: 100%;        align-items: center;        justify-content: space-between;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:first-child,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr div:first-child,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        div:first-child,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:first-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:first-child,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        div:first-child,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        div:first-child {        margin-left: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:last-child,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr div:last-child,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr div:last-child,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:last-child,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:last-child,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        div:last-child,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        div:last-child {        margin-right: 0.5rem;        margin-left: 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-always-active,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-always-active,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-always-active,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-always-active {        position: relative;        right: unset;        top: unset;        transform: unset;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-arw-cntr,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-arw-cntr {        float: none;        top: unset;        right: unset;        transform: unset;        margin-top: -2px;        position: relative;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-cat-header,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-cat-header,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-cat-header {        flex: 1;        margin: 0 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-tgl {        position: relative;        transform: none;        right: 0;        top: 0;        float: none;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox {        position: relative;        margin: 0 0.5rem;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-chkbox        label,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox label,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox        label {        padding: 0;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label::before,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox label::before,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        label::before,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox        label::before {        position: relative;      }      #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk ul.ot-subgrps .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        .ot-acc-hdr        .ot-chkbox        input,      #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox input,      #onetrust-pc-sdk        #ot-pc-lst        .ot-vs-list        .ot-vnd-item        .ot-acc-hdr        .ot-chkbox        input,      #onetrust-pc-sdk        .ot-accordion-layout.ot-checkbox-consent        .ot-acc-hdr        .ot-chkbox        input {        position: absolute;        cursor: pointer;        width: 100%;        height: 100%;        opacity: 0;        margin: 0;        top: 0;        left: 0;        z-index: 1;      }      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        h5.ot-cat-header,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        h4.ot-cat-header,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        p[aria-level="5"].ot-cat-header,      #onetrust-pc-sdk        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        .ot-acc-hdr        p[aria-level="4"].ot-cat-header {        margin: 0;      }      #onetrust-pc-sdk        .ot-vs-config        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        h5,      #onetrust-pc-sdk        .ot-vs-config        .ot-subgrp-cntr        ul.ot-subgrps        li.ot-subgrp        p[aria-level="5"] {        top: 0;        line-height: 20px;      }      #onetrust-pc-sdk .ot-vs-list {        display: flex;        flex-direction: column;        padding: 0;        margin: 0.5rem 4px;      }      #onetrust-pc-sdk .ot-vs-selc-all {        display: flex;        padding: 0;        float: unset;        align-items: center;        justify-content: flex-start;      }      #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf {        justify-content: flex-end;      }      #onetrust-pc-sdk        .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf        .ot-sel-all-chkbox {        margin-right: 48px;      }      #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf .ot-sel-all-chkbox {        margin: 0;        padding: 0;        margin-right: 14px;        justify-content: flex-end;      }      #onetrust-pc-sdk        .ot-vs-selc-all.ot-toggle-conf        #ot-selall-vencntr.ot-chkbox,      #onetrust-pc-sdk        .ot-vs-selc-all.ot-toggle-conf        #ot-selall-vencntr.ot-tgl {        display: inline-block;        right: unset;        width: auto;        height: auto;        float: none;      }      #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr label {        width: 45px;        height: 25px;      }      #onetrust-pc-sdk .ot-vs-selc-all .ot-sel-all-chkbox {        margin-right: 11px;        margin-left: 0.75rem;        display: flex;        align-items: center;      }      #onetrust-pc-sdk .ot-vs-selc-all .sel-all-hdr {        margin: 0 1.25rem;        font-size: 0.812em;        line-height: normal;        text-align: center;        word-break: break-word;        word-wrap: break-word;      }      #onetrust-pc-sdk .ot-vnd-list-cnt #ot-selall-vencntr.ot-chkbox {        float: unset;        right: 0;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf        .ot-sel-all-chkbox {        margin-right: 50px;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all.ot-toggle-conf        #ot-selall-vencntr        label {        width: 35px;        height: 10px;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all.ot-toggle-conf        .ot-sel-all-chkbox {        justify-content: flex-end;      }      #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox {        right: unset;        display: flex;        align-items: center;      }      #onetrust-pc-sdk.otPcTab        .ot-vs-selc-all        .ot-sel-all-chkbox        #ot-selall-vencntr.ot-chkbox {        right: unset;      }      #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox {        margin-left: 12px;      }      #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox .sel-all-hdr {        margin: 0 1rem;      }      #onetrust-pc-sdk .ot-pgph-link {        font-size: 0.813em;        margin-top: 5px;        position: relative;      }      #onetrust-pc-sdk .ot-pgph-link.ot-pgph-link-subgroup {        margin-bottom: 1rem;      }      #onetrust-pc-sdk .ot-pgph-contr {        margin: 0 2.5rem;      }      #onetrust-pc-sdk .ot-pgph-title {        font-size: 1.18rem;        margin-bottom: 2rem;      }      #onetrust-pc-sdk .ot-pgph-desc {        font-size: 1rem;        font-weight: 400;        margin-bottom: 2rem;        line-height: 1.5rem;      }      #onetrust-pc-sdk .ot-pgph-desc:not(:last-child):after {        content: "";        width: 96%;        display: block;        margin: 0 auto;        padding-bottom: 2rem;        border-bottom: 1px solid #e9e9e9;      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] input ~ .ot-acc-hdr .ot-arw,      #onetrust-pc-sdk.otPcTab[dir="rtl"] #ot-back-arw {        transform: rotate(180deg);        -o-transform: rotate(180deg);        -ms-transform: rotate(180deg);        -webkit-transform: rotate(180deg);      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] input:checked ~ .ot-acc-hdr .ot-arw {        transform: rotate(270deg);        -o-transform: rotate(270deg);        -ms-transform: rotate(270deg);        -webkit-transform: rotate(270deg);      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] #ot-search-cntr svg {        right: 15px;      }      #onetrust-pc-sdk.otPcTab[dir="rtl"] .ot-chkbox label::after {        transform: rotate(45deg);        -webkit-transform: rotate(45deg);        -o-transform: rotate(45deg);        -ms-transform: rotate(45deg);        border-left: 0;        border-right: 3px solid;      }      #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {        padding: 0;        background-color: rgba(0, 0, 0, 0);        border: none;        margin: 0;      }      @media (max-width: 767px) {        #onetrust-pc-sdk {          width: 100%;          border: none;        }        #onetrust-pc-sdk .ot-optout-signal {          margin: 0.625rem;        }        #onetrust-pc-sdk .ot-sdk-container,        #onetrust-pc-sdk .ot-sdk-container {          padding: 0;          margin: 0;        }        #onetrust-pc-sdk .ot-title-cntr {          width: 75%;        }        #onetrust-pc-sdk .ot-title-cntr #ot-pc-title {          white-space: break-spaces;          font-size: 20px;          overflow-x: visible;          margin-left: 10px;        }        #onetrust-pc-sdk .ot-pc-logo {          width: 15%;        }        #onetrust-pc-sdk .ot-pc-logo img {          max-height: 100%;          font-size: 10px;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin: 0;          padding-top: 20px;          padding-right: 20px;          padding-bottom: 15px;          padding-left: 20px;          position: relative;          left: auto;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin-top: 20px;          margin-left: 20px;          padding: 0;          padding-bottom: 10px;        }        #onetrust-pc-sdk .ot-grps-cntr {          max-height: none;          overflow: hidden;        }        #onetrust-pc-sdk #accept-recommended-btn-handler {          float: none;        }      }      @media (min-width: 768px) {        #onetrust-pc-sdk.ot-tgl-with-label .ot-label-status {          display: inline;        }        #onetrust-pc-sdk.ot-tgl-with-label #ot-pc-lst .ot-label-status {          display: none;        }        #onetrust-pc-sdk.ot-tgl-with-label.ot-leg-opt-out .ot-pli-hdr {          padding-right: 8%;        }        #onetrust-pc-sdk.ot-tgl-with-label .ot-cat-header {          max-width: 60%;        }        #onetrust-pc-sdk.ot-tgl-with-label .ot-subgrp h4,        #onetrust-pc-sdk.ot-tgl-with-label .ot-subgrp p[aria-level="4"] {          max-width: 58%;        }        #onetrust-pc-sdk.ot-tgl-with-label          .ot-subgrp-cntr          ul.ot-subgrps          li.ot-subgrp          > h6,        #onetrust-pc-sdk.ot-tgl-with-label          .ot-subgrp-cntr          ul.ot-subgrps          li.ot-subgrp          > p[aria-level="6"] {          max-width: 50%;        }        #onetrust-pc-sdk.ot-tgl-with-label          .ot-desc-cntr          .ot-tgl-cntr:first-of-type,        #onetrust-pc-sdk.ot-tgl-with-label .ot-cat-header + .ot-tgl {          padding-left: 15px;        }        #onetrust-pc-sdk.ot-tgl-with-label .ot-vnd-serv .ot-label-status,        #onetrust-pc-sdk.ot-tgl-with-label .ot-grp-hdr1 .ot-label-status {          display: none;        }      }      @media (max-width: 640px) {        #onetrust-pc-sdk {          height: 100%;        }        #onetrust-pc-sdk .ot-optout-signal {          margin: 0.625rem;        }        #onetrust-pc-sdk .ot-pc-header {          padding: 10px;          width: calc(100% - 20px);        }        #onetrust-pc-sdk #ot-pc-content {          overflow: auto;        }        #onetrust-pc-sdk .ot-sdk-row .ot-sdk-columns {          width: 100%;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin: 0;          overflow: hidden;        }        #onetrust-pc-sdk .ot-desc-cntr {          margin-left: 10px;          width: calc(100% - 15px);          margin-top: 5px;          margin-bottom: 5px;        }        #onetrust-pc-sdk .ot-ven-hdr {          max-width: 80%;        }        #onetrust-pc-sdk #ot-lst-cnt {          width: calc(100% - 18px);          padding-top: 13px;          padding-right: 5px;          padding-left: 10px;        }        #onetrust-pc-sdk .ot-grps-cntr {          width: 100%;        }        #onetrust-pc-sdk .ot-pc-footer {          max-height: 210px;        }        #onetrust-pc-sdk #ot-pc-content,        #onetrust-pc-sdk #ot-pc-lst {          height: calc(100% - 322px);        }        #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {          position: fixed;          top: 10px;          right: 15px;        }        #onetrust-pc-sdk.ot-close-btn-link .ot-pc-header {          padding-top: 25px;        }        #onetrust-pc-sdk.ot-close-btn-link #ot-pc-title {          max-width: 100%;        }        #onetrust-pc-sdk          .ot-btn-container.ot-button-order-container          *[class*="ot-button-order-"]:nth-of-type(1) {          margin-right: 15px;        }        #onetrust-pc-sdk #ot-pc-title-mobile {          display: block !important;          line-height: 1.5;          margin-bottom: 10px;          margin-top: 10px;          width: 100%;          padding-left: 12px;        }        #onetrust-pc-sdk #ot-pc-title {          display: none !important;        }        #onetrust-pc-sdk .ot-pc-logo {          width: 180px !important;        }        #onetrust-pc-sdk .ot-title-cntr {          float: right;          width: auto !important;        }        #onetrust-pc-sdk .ot-close-cntr {          transform: translateY(0%);        }      }      @media (max-width: 640px) and (orientation: portrait) {        #onetrust-pc-sdk #ot-pc-hdr {          height: 70px;          padding: 15px 0;          width: 100%;        }        #onetrust-pc-sdk .ot-lst-subhdr {          width: calc(100% - 15px);          float: none;          bottom: auto;          display: inline-block;          padding-top: 8px;          padding-left: 15px;        }        #onetrust-pc-sdk .ot-btn-subcntr {          float: none;        }        #onetrust-pc-sdk #ot-search-cntr {          display: inline-block;          width: calc(100% - 55px);          position: relative;        }        #onetrust-pc-sdk #ot-anchor {          top: 75px;          right: 30px;        }        #onetrust-pc-sdk #ot-fltr-modal {          top: 81px;        }        #onetrust-pc-sdk #ot-fltr-cntr {          float: right;          right: 15px;        }        #onetrust-pc-sdk #ot-lst-title {          padding-left: 15px;        }        #onetrust-pc-sdk #ot-lst-cnt {          height: auto;          overflow: auto;        }        #onetrust-pc-sdk .save-preference-btn-handler,        #onetrust-pc-sdk #accept-recommended-btn-handler,        #onetrust-pc-sdk .ot-pc-refuse-all-handler {          width: calc(100% - 33px) !important;        }        #onetrust-pc-sdk.ot-ftr-stacked .save-preference-btn-handler,        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr {          max-width: none;        }        #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button {          margin: 15px;        }        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button {          min-width: none;          max-width: none;        }        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button:nth-child(2) {          margin-top: 15px;        }        #onetrust-pc-sdk.ot-ftr-stacked          .ot-btn-container          button:not(:last-child) {          margin-bottom: 0;        }      }      @media (max-width: 425px) {        #onetrust-pc-sdk .ot-pc-header .ot-pc-logo {          width: 150px img;          width-max-height: 100%;          width-font-size: 10px;        }        #onetrust-pc-sdk .ot-title-cntr {          width: 75%;        }        #onetrust-pc-sdk #ot-pc-lst .ot-acc-txt {          padding-top: 6px;          padding-bottom: 10px;        }        #onetrust-pc-sdk #ot-pc-lst .ot-host-notice {          float: left;          margin-left: 30px;        }        #onetrust-pc-sdk #ot-pc-lst .ot-arw-cntr {          float: none;          display: inline;        }        #onetrust-pc-sdk #ot-pc-lst .ot-ven-hdr {          float: left;          width: 100%;          max-width: 85%;        }        #onetrust-pc-sdk.ot-addtl-vendors          #ot-pc-lst          .ot-acc-cntr          .ot-arw-cntr:first-of-type {          float: right;        }        #onetrust-pc-sdk #ot-pc-title {          max-width: 100%;          white-space: break-spaces;          font-size: 20px;          overflow-x: visible;        }        #onetrust-pc-sdk .ot-subgrp-cntr li.ot-subgrp {          margin-left: 10px;          width: calc(100% - 10px);        }        #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {          width: auto;          float: right;        }        #onetrust-pc-sdk #ot-ven-lst .ot-arw-cntr {          float: right;        }        #onetrust-pc-sdk .ot-ven-hdr {          max-width: 47%;        }        #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr:first-of-type {          max-width: none;          padding-left: 20px;        }      }      @media only screen and (max-height: 425px) and (max-width: 896px) and (orientation: landscape) {        #onetrust-pc-sdk {          height: 100%;          width: 100%;          max-width: none;        }        #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr {          max-width: none;        }        #onetrust-pc-sdk .ot-pc-header {          padding: 10px;          width: calc(100% - 20px);          height: auto;          min-height: 20px;        }        #onetrust-pc-sdk .ot-pc-header .ot-pc-logo {          max-height: 20px;          width: 20%;        }        #onetrust-pc-sdk .ot-pc-header .ot-pc-logo img {          max-height: 100%;          font-size: 10px;        }        #onetrust-pc-sdk .ot-title-cntr {          width: 75%;        }        #onetrust-pc-sdk .ot-title-cntr #ot-pc-title {          white-space: break-spaces;          font-size: 20px;          overflow-x: visible;        }        #onetrust-pc-sdk .ot-pc-footer {          max-height: 90px;        }        #onetrust-pc-sdk .ot-pc-footer .ot-btn-container {          overflow-y: auto;        }        #onetrust-pc-sdk #ot-pc-lst {          overflow-y: auto;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr {          height: auto;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr #ot-pc-title {          max-height: 20px;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr .ot-lst-subhdr {          padding: 10px 5px;          float: none;        }        #onetrust-pc-sdk #ot-pc-lst #ot-pc-hdr .ot-lst-subhdr #ot-fltr-cntr {          margin-top: 5px;        }        #onetrust-pc-sdk #ot-pc-lst #ot-lst-cnt {          overflow: visible;        }        #onetrust-pc-sdk #ot-lst-cnt {          height: auto;          overflow: auto;        }        #onetrust-pc-sdk #accept-recommended-btn-handler {          float: right;        }        #onetrust-pc-sdk #ot-pc-content,        #onetrust-pc-sdk #ot-pc-lst {          height: calc(100% - 120px);        }        #onetrust-pc-sdk.ot-shw-fltr .ot-lst-cntr {          overflow: hidden;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-pc-lst {          position: static;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-modal {          top: 0;          width: 100%;          height: 100%;          max-height: none;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-modal > div {          margin: 0;          box-sizing: initial;          height: 100%;          max-height: none;        }        #onetrust-pc-sdk.ot-shw-fltr #clear-filters-handler {          padding-right: 20px;        }        #onetrust-pc-sdk.ot-shw-fltr #ot-anchor {          display: none !important;        }        #onetrust-pc-sdk .ot-pc-footer button {          margin: 10px;        }      }      @media (max-width: 425px),        (max-width: 896px) and (max-height: 425px) and (orientation: landscape) {        #onetrust-pc-sdk .ot-pc-header {          padding-right: 20px;        }        #onetrust-pc-sdk .ot-pc-logo {          margin-left: 0px;          margin-top: 5px;          width: 150px;        }        #onetrust-pc-sdk .ot-close-icon {          width: 44px;          height: 44px;          background-size: 12px;        }        #onetrust-pc-sdk .ot-grp-hdr1 {          float: right;          padding-right: 10px;        }        #onetrust-pc-sdk .ot-grp-hdr1 + .ot-vlst-cntr {          padding-top: 10px;        }      }      @media only screen and (max-height: 610px) {        #onetrust-pc-sdk {          max-height: 100%;        }      }      @media (max-width: 425px) and (orientation: landscape) {        #onetrust-pc-sdk .ot-pc-header #ot-pc-title {          font-size: 10px;        }      }      #onetrust-consent-sdk #onetrust-pc-sdk,      #onetrust-consent-sdk #ot-search-cntr,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,      #onetrust-consent-sdk #onetrust-pc-sdk ot-grp-hdr1 .checkbox,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title:after,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-anchor {        background-color: #ffffff;      }      #onetrust-consent-sdk #onetrust-pc-sdk h3,      #onetrust-consent-sdk #onetrust-pc-sdk h4,      #onetrust-consent-sdk #onetrust-pc-sdk h5,      #onetrust-consent-sdk #onetrust-pc-sdk h6,      #onetrust-consent-sdk #onetrust-pc-sdk p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title h3,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-pc-lst        #ot-lst-title        p[aria-level="3"],      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-pc-lst        #ot-ven-lst        .consent-category,      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-inactive-leg-btn,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,      #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal {        color: #121212;      }      #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-pgph-link,      #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,      #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,      #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-link,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-legclaim-link,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-name a,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-host-lst        .ot-acc-hdr        .ot-host-expand,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info a,      #onetrust-consent-sdk        #onetrust-pc-sdk        #ot-pc-content        #ot-pc-desc        .ot-link-btn,      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-vnd-serv        .ot-vnd-item        .ot-vnd-info        a,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a,      #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc a {        color: #024ddf;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .category-vendors-list-handler:hover {        text-decoration: underline;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-grpcntr.ot-acc-txt,      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-acc-txt        .ot-subgrp-tgl        .ot-switch.ot-toggle {        background-color: #e9e9e9;      }      #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-ven-dets {        background-color: #e9e9e9;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        button:not(#clear-filters-handler):not(.ot-close-icon):not(          #filter-btn-handler        ):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not(          [aria-expanded]        ):not(.ot-link-btn),      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-active-leg-btn {        background-color: #024ddf;        border-color: #024ddf;        color: #ffffff;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {        border-color: #024ddf;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-remove-objection-handler {        background-color: transparent;        border: 1px solid transparent;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-leg-btn-container        .ot-inactive-leg-btn {        background-color: #ffffff;        color: #4d4d4d;        border-color: #4d4d4d;      }      #onetrust-consent-sdk        #onetrust-pc-sdk        .ot-tgl        input:checked        + .ot-switch        .ot-switch-nob {        background-color: #468254;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch-nob {        background-color: #767676;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch,      .ot-switch .ot-switch-nob,      .ot-switch .ot-switch-nob:before,      #onetrust-pc-sdk        .ot-checkbox        input[type="checkbox"]:focus        + label::before,      #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {        outline-color: #000000;        outline-width: 1px;        outline-offset: 1px;      }      #onetrust-pc-sdk .ot-host-item > button:focus,      #onetrust-pc-sdk .ot-ven-item > button:focus {        border: 1px solid #000000;      }      #onetrust-consent-sdk #onetrust-pc-sdk *:focus,      #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {        outline: 1px solid #000000;        outline-offset: 1px;      }      #onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {        background-color: #f4f4f4;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {        background-color: #ffffff;      }      #onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {        background-color: #f4f4f4;      }      #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {        background-color: #ffffff;      }      #ot-sdk-btn.ot-sdk-show-settings,      #ot-sdk-btn.optanon-show-settings {        background: transparent;        border: none;        color: #026cdf;        padding: 0.2em 8px;        font-size: 14px;        text-decoration: none;      }      .ot-sdk-cookie-policy {        font-family: inherit;        font-size: 16px;      }      .ot-sdk-cookie-policy.otRelFont {        font-size: 1rem;      }      .ot-sdk-cookie-policy h3,      .ot-sdk-cookie-policy h4,      .ot-sdk-cookie-policy h6,      .ot-sdk-cookie-policy p,      .ot-sdk-cookie-policy li,      .ot-sdk-cookie-policy a,      .ot-sdk-cookie-policy th,      .ot-sdk-cookie-policy #cookie-policy-description,      .ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,      .ot-sdk-cookie-policy #cookie-policy-title {        color: dimgray;      }      .ot-sdk-cookie-policy #cookie-policy-description {        margin-bottom: 1em;      }      .ot-sdk-cookie-policy h4 {        font-size: 1.2em;      }      .ot-sdk-cookie-policy h6 {        font-size: 1em;        margin-top: 2em;      }      .ot-sdk-cookie-policy th {        min-width: 75px;      }      .ot-sdk-cookie-policy a,      .ot-sdk-cookie-policy a:hover {        background: #fff;      }      .ot-sdk-cookie-policy thead {        background-color: #f6f6f4;        font-weight: bold;      }      .ot-sdk-cookie-policy .ot-mobile-border {        display: none;      }      .ot-sdk-cookie-policy section {        margin-bottom: 2em;      }      .ot-sdk-cookie-policy table {        border-collapse: inherit;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy {        font-family: inherit;        font-size: 1rem;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {        color: dimgray;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {        margin-bottom: 1em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup {        margin-left: 1.5em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-group-desc,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td {        font-size: 0.9em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a {        font-size: inherit;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-group {        font-size: 1em;        margin-bottom: 0.6em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-title {        margin-bottom: 1.2em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy > section {        margin-bottom: 1em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {        min-width: 75px;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover {        background: #fff;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead {        background-color: #f6f6f4;        font-weight: bold;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border {        display: none;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section {        margin-bottom: 2em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li {        list-style: disc;        margin-left: 1.5em;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4 {        display: inline-block;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {        border-collapse: inherit;        margin: auto;        border: 1px solid #d7d7d7;        border-radius: 5px;        border-spacing: initial;        width: 100%;        overflow: hidden;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {        border-bottom: 1px solid #d7d7d7;        border-right: 1px solid #d7d7d7;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {        border-bottom: 0px;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child {        border-right: 0px;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {        width: 25%;      }      .ot-sdk-cookie-policy[dir="rtl"] {        text-align: left;      }      #ot-sdk-cookie-policy h3 {        font-size: 1.5em;      }      @media only screen and (max-width: 530px) {        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {          display: block;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr {          position: absolute;          top: -9999px;          left: -9999px;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {          margin: 0 0 1em 0;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2)          tr:nth-child(odd)          a {          background: #f6f6f4;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td {          border: none;          border-bottom: 1px solid #eee;          position: relative;          padding-left: 50%;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {          position: absolute;          height: 100%;          left: 6px;          width: 40%;          padding-right: 10px;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border {          display: inline-block;          background-color: #e4e4e4;          position: absolute;          height: 100%;          top: 0;          left: 45%;          width: 2px;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {          content: attr(data-label);          font-weight: bold;        }        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li {          word-break: break-word;          word-wrap: break-word;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {          overflow: hidden;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {          border: none;          border-bottom: 1px solid #d7d7d7;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {          display: block;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {          width: auto;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {          margin: 0 0 1em 0;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {          height: 100%;          width: 40%;          padding-right: 10px;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {          content: attr(data-label);          font-weight: bold;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li {          word-break: break-word;          word-wrap: break-word;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr {          position: absolute;          top: -9999px;          left: -9999px;          z-index: -9999;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {          border-bottom: 1px solid #d7d7d7;          border-right: 0px;        }        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy          table          tr:last-child          td:last-child {          border-bottom: 0px;        }      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {        color: #696969;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {        color: #696969;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy        .ot-sdk-cookie-policy-group {        color: #026cdf;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {        color: #026cdf;      }      #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {        background-color: #f8f8f8;      }      .ot-floating-button__front {        background-image: url("https://cdn.cookielaw.org/logos/static/ot_persistent_cookie_icon.png");      }    ',
      }}
      id="onetrust-style"
    />
    <form name="frmGlobalNudetect">
      <input
        defaultValue="BNDX:TkRYOiVwWUkgdUtiQlJhbTQpSkonbiI3ITRUOjtAOT56KV59Ryd9SlN1SDdyQlxwPTtvWkJgRjZJcVcnU045dVpPWyckJigsb0VxeCtkRj9odks7ISY5TExkWCtiJHRgOzhhMT1nLnA9bj8kYEleLEAteS47Yl5heTA2eUokcSg4MmlFJik/ZFwjcTdHYngtP0AgdEE6cEIjaH1bSXJAdHtbM2YoVXktSlRCLjFUX2wlNTV7LmFWZn0rKylLLXs9VVdbaG90Onh6Pj5zLj9yWnVSXGBHK2lwUmg+MXhZWyJHP1k2RHo8RnlBPHVKRGFwXmBGQCVnRm9WMWd8SSt7R1F1dVpmTDAwSXAvM0N2RzZRJW0xdDlmd1skSC9FbDxcdV05WlBrRlBtckNsOkxmZiAhbClpRFchfD5xYjFUaEBlWkk/eFhgVyFiZyZhUT4tcVdCSjI3dC8wQD0uT3tYLCBoXz1PQTA6PTZldjhZOSU/VVwkLCROJSZUKnQvP0kvJDNibjldK3xAbEouX21PMyZSc0hgJl0jeWsxcEYgdFNHWDwvbUJJQE9VL0M5ajgibioiaEFWIEFDZl5TcVRUVGZGY1J9aiUsYT5SZUh3NnJ1Q0dOXi82RG8qSyJXJ0o6YHxbWE5HWHYyYn1rQ0NMPXlrVjxDICFqKHw9WDdJWXppJHZmNmxXI2tXTDRyOnFiOG9hTWddVG02LDl4LjkweWM4eW8qNmg5dlNRJT5bT2lGPV19Pl5admN6RF8ocGZ4U0ROcGYgeE91SCw/RjJ7bUA0WCYyKTlMWywvL0l3QVptZitsZDhrXCE3XSxpIShvTzFsUyR1aEBdLCFJMihqJDRiMUpUNWVvYiNbXS1HLjFkUHUnOy99UilpMHsgfTZjdzBfPVtiTCVkPHZEc1haS0gwXjw8MTE6KmkndWUhbUhVeF5SUGFJamFBIyxLO11baEBXPkEuZU88VDl8Y1Z5RStCOWNVYCd4PEo9UUs0WXxzWW85P1EhZCVeQDg5Y3dAW1xsWXpFRFlcRitUWndrMFlsW3ZoIXVLOzg+Ii11MnNmNGtZXXQ4K2lHTzBPMWxFOnF5O2lGemQjem9bNzY4RGIsJytRLUEkdWZ9IWw2KDR7MFtbO2EoKSY2Nno6NmYweDV1SzB5VyIqSTpBQnRFOmBTci11aS5uVFUtVT1QZiF6bUJqSTU1XUFxLlFnUkxyWj4wbUpoIyVGMlxxZHlhRC9nRThTLE5KWFJsXzM4e3RKJ1lgTERieEozd0I3LFI+dVYnUEw7TEUuek43NmteeD4+fFlDc1ZQdVovcmUlLjs6a0Q/eGs/aEUra2Elbzd9ZTgrLVNTKmVVYlshbSsxaToyNzM7ZH06NzVBOl8pZFhWYlR0UmwlLTtvJn1NM3U7Il5tK3Q2TSZRUnEkUnZpKW9eJX13Xm1DPTRVJkYoUyZUKm5UI2hUTVAiJmY2XCxfLWRDQ0tae3FkJVlfLWlXQj0sIGRCLWRJS2FNJjZGdDMtNURXQSEmbWR2QmFCVFxLbjRzPzR4PEF8SzN4U196QCh1QTFDUz45QEN0Yk5qY1xpVFpLcCpHVSFyL3tMXSVkLFljQDJvIlRnMz1QMk1pW0k+R3ViJVRhVjcoOTpheUY1XDxTQD42WihMKFsgIyhcJVAncjBfOEU3XidDZW1XZDImcURcLi9Ia1QiKkMhO1AgVmFXInwqXHtEZXpLQXlUM1IsXC4nbSckbVwmZEtNYFR6aEBSNj9qSiFzYUg6OlF6JTspbVFVL3clbUpycFhUPSktI0NeUSNeZjA+fUJCZTp1SzJ4elpiMEQyIDUoLX06TS1Ub1lPcCluN0EiLCE7ODpxYSJXJnliZlI7X0swajxFQko4YGRZNVtIfXdeXUN8OTE3cVV8QltjJG17eH0uJl18dywgWCx2djh2MklGR0QpaD0mSmx1YGV1XHNAdkklcD5SMy1BbD9PPCZ7XGM8KmtEVGZnUmpmVChRa3hiYkRxZzgjWURRTXRUTStSe1c9Lj49NUBvU3RhXnwqU1RrOihHdygyOnwrWyBMLG9xbTFRXiptJC4mI10ySTZHQTw3fFQ9em5mPzUvNT41Q2JWIFpoTDJSeWVpVHA="
        name="nds-pmd"
        type="hidden"
      />
    </form>
    <div id="root">
      <div className="sc-lgpMPg bAakpj">
        <div className="sc-bdGppH rYIoB">
          <div className="sc-eCBFQe iSWNLy" />
          <div className="sc-hHuwoJ eCOglB">
            <div
              data-focus-guard="true"
              style={{
                height: "0px",
                left: "1px",
                overflow: "hidden",
                padding: "0px",
                position: "fixed",
                top: "1px",
                width: "1px",
              }}
              tabIndex="0"
            />
            <div className="sc-kRrpDR eEzIFU" data-focus-lock-disabled="false">
              <div className="sc-eUcQtI gaOVxq">
                <div className="sc-fHekdU fWJFqx">
                  <div className="sc-fmKESW gvElxr">
                    <div
                      className="sc-brSaZZ liYeoD layout"
                      elementname="layout"
                      tabIndex="-1">
                      <div className="sc-ktwOSE LBtkt">
                        <div
                          className="sc-iKOlBD dpYlaW"
                          data-bdd="left-column"
                          sidebarbackground="">
                          <div
                            className="sc-gjLKRm dkiXSW"
                            role="contentinfo"
                            sidebarcontent="Descubre millones de eventos, recibe alertas de tus artistas favoritos, equipos, obras de teatro y más. Además de la impresión de tus boletos de forma rápida y Segura.">
                            <div
                              bottom="[object Object]"
                              className="sc-kFCscd bbSOtP"
                              top="[object Object]">
                              <span className="TextStyle__Mauna-sc-1vd3o1f-0 sc-eAKupd fJrySM hJyDdn">
                                Bienve-
                                nido
                              </span>
                            </div>
                            <div
                              bottom="[object Object]"
                              className="sc-kFCscd bbSOtP"
                              top="[object Object]">
                              <span className="TextStyle__Boising-sc-1vd3o1f-8 sc-bZHTEM bTOJpL jZxgul">
                                Descubre millones de eventos, recibe alertas de
                                tus artistas favoritos, equipos, obras de teatro
                                y más. Además de la impresión de tus boletos de
                                forma rápida y Segura.
                              </span>
                            </div>
                            <div
                              bottom="[object Object]"
                              className="sc-kFCscd bbSOtP"
                              top="[object Object]"
                            />
                          </div>
                          <img
                            alt="Ticketmaster logo"
                            className="sc-kMzDYv cwCGXb"
                            src={ticket}
                          />
                        </div>
                      </div>
                      <div className="sc-hABAzn jwVoiU">
                        <main className="sc-hECAmj dbIyIC">
                          <form className="sc-ldxQMG juwbgW" noValidate>
                            <div className="sc-eEpfgt GTHc">
                              <div
                                className="sc-idkvGQ bRqAmy"
                                id="scrollContent">
                                <div
                                  className="sc-cpojZm sc-glxher kuxlPj cUtRHM"
                                  data-bdd="header"
                                  subheadertext="">
                                  <header className="sc-egTteR bGynNG">
                                    <div className="sc-jMbUWf juitcs">
                                     <span className="TextStyle__Vinson-sc-1vd3o1f-4 bRRZCY">
                                      {step === 1 ? "Iniciar sesión" : "Ingrese su contraseña"}
                                    </span>
                                    </div>
                                  </header>
                                 <div className="sc-dNmCwA gDMzVA">
  {step === 1
    ? "Si no tiene una cuenta, se le pedirá que cree una."
    : `Inicie sesión en su cuenta de Ticketmaster mediante correo electrónico ${email}`
  }
</div>
                                </div>
                                <div
                                  className="sc-cpojZm sc-iZpJWe kuxlPj kyZugx"
                                  id="Main">
                                  <div
                                    className="sc-jKBbGJ iJZhsi"
                                    tabIndex="-1"
                                  />
                                  <div
                                    className="Stack-sc-br1alc-0 hysFLM"
                                    gap="amphitheatre">
                                    <div className="sc-jURugM WvNYH">
                                      <div
                                        className="Stack-sc-br1alc-0 hysFLM"
                                        gap="amphitheatre">
                                       {step === 1 ? (
                                        <div className="indexstyles__InputField-sc-ruvmzp-0 bAuGGp" id="email">
                                          <label className="indexstyles__Label-sc-ruvmzp-1 iIpMRS">
                                            Correo Electrónico
                                          </label>
                                                                            
                                          <div className="indexstyles__Row-sc-ruvmzp-2 kpepTM">
                                            <input
                                              type="email"
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                              className="indexstyles__Input-sc-ruvmzp-3 cEfHBv"
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="indexstyles__InputField-sc-ruvmzp-0 bAuGGp">
                                          <label className="indexstyles__Label-sc-ruvmzp-1 iIpMRS">
                                            Contraseña
                                          </label>
                                      
                                         <div className="indexstyles__Row-sc-ruvmzp-2 kpepTM">
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="indexstyles__Input-sc-ruvmzp-3 cEfHBv"
  />
</div>

{/* 👇 FUERA DEL ROW */}
<div style={{ marginTop: "8px" }}>
  <span
    style={{
      color: "#026cdf",
      cursor: "pointer",
      fontSize: "14px",
      textDecoration: "underline"
    }}
  >
    Olvidé mi contraseña
  </span>
</div>
                                        </div>
                                      )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sc-cpojZm sc-fgitDh sc-eRIHdo kuxlPj dlXhRj dQpPfR">
                                  <div className="sc-iLWhZj csZoJC">
                               <button
                                  onClick={step === 1 ? handleContinue : handleLogin}
                                  disabled={!isEnabled}
                                  className={`indexstyles__StyledButton-sc-83qv1q-0 ialskZ sc-fWsWPJ jehQDx ${
                                    isEnabled ? "active-btn" : "disabled-btn"
                                  }`}
                                  type="button"
                                >
                                  <span className="indexstyles__FlexWrapper-sc-83qv1q-1 jFxtvs">
                                    <span className="indexstyles__Text-sc-83qv1q-2 bPJJbA">
                                      <span className="sc-kOztBr iTLppx">
                                        <span className="sc-hGQWzk eLsmpw">
                                          {step === 1 ? "Continuar" : "Iniciar sesión"}
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </button>
                                  </div>
                                  <div
                                    className="Stack-sc-br1alc-0 hysFLM"
                                    gap="amphitheatre">
                                    <div className="sc-jURugM WvNYH">
                                      <div className="sc-iPFXgZ jBSyLV">
                                        <hr className="sc-gkTHoS hbqAFZ" />
                                        <span className="sc-SMxaf bPIIBj">
                                          O
                                        </span>
                                      </div>
                                    </div>
                                    <div className="sc-jURugM WvNYH">
                                      <button
                                        className="indexstyles__StyledButton-sc-83qv1q-0 gLreqQ sc-fZZUYX cQdKsk"
                                        colorvariant="tertiary"
                                        data-bdd="sign-in-with-passkey"
                                        fillvariant="outline"
                                        lefticon="[object Object]"
                                        type="button">
                                        <span className="indexstyles__FlexWrapper-sc-83qv1q-1 jFxtvs">
                                          <svg
                                            aria-hidden="true"
                                            className="BaseSvg-sc-yh8lnd-0 UserWithKeyIcon___StyledBaseSvg-sc-y7aypn-0 kIECio"
                                            fillcolor="currentColor"
                                            focusable="false"
                                            height="1.5em"
                                            viewBox="0 0 24 24"
                                            width="1.5em">
                                            <path d="m21.38 8.1 1 .97v3.87l-1 .98-.86.87v.57l1.24 1.23-1.24 1.24v.26l1.4 1.39-1.4 1.4v1.06L19.46 23H17.6l-1.16-1.17v-7.02l-.88-.89-1-.98V9.07l1-.97.97-1h3.88zm-4.8 1.02-.56.56v2.66l.57.55.55.57h.75v7.88l.2.2h.77l.2-.2v-1.07l.8-.79-.8-.8v-1.45l.64-.64-.64-.63v-2.5h.74l.56-.57.56-.55V9.68l-.57-.56-.55-.56h-2.66zm-3.78 3.93H5.56L3 15.38v2.88h11.65v1.42H1.63v-4.94l3.4-3.12h7.77zm6.4-2h-1.45V9.6h1.45zM10.37 1a4.57 4.57 0 0 1 4.48 4.66c0 2.57-2 4.66-4.48 4.66a4.57 4.57 0 0 1-4.48-4.66c0-2.57 2-4.66 4.48-4.66m0 1.5a3.1 3.1 0 0 0-3.03 3.16 3.1 3.1 0 0 0 3.03 3.16 3.1 3.1 0 0 0 3.03-3.16 3.1 3.1 0 0 0-3.03-3.16" />
                                          </svg>
                                          <span className="indexstyles__Text-sc-83qv1q-2 dEnbwP">
                                            Iniciar sesión con una llave de
                                            acceso
                                          </span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className="Stack-sc-br1alc-0 hysFLM"
                                    gap="amphitheatre">
                                    <div className="sc-jURugM WvNYH">
                                      <button
  onClick={step === 2 ? () => {
    setStep(1);
    setPassword("");
  } : undefined}
  style={{ cursor: step === 2 ? "pointer" : "default" }}
  className="indexstyles__StyledButton-sc-83qv1q-0 kyWLHK sc-cSrxWQ jdfjHK"
  type="button"
>
  <span className="indexstyles__FlexWrapper-sc-83qv1q-1 jFxtvs">
    <span className="indexstyles__Text-sc-83qv1q-2 bPJJbA">
      {step === 1
        ? "Cómo agregar una llave de acceso"
        : "Regresar"}
    </span>
  </span>
</button>
                                    </div>
                                  </div>
                                  <p
                                    accent="gray01"
                                    className="sc-cLvOO heJlMe"
                                    colorscheme="tm"
                                    data-bdd="sign-in-footer-copy"
                                    variant="accent">
                                    <span className="TextStyle__Etna-sc-1vd3o1f-9 gLHVhK">
                                      Al continuar con la siguiente página,
                                      aceptas los
                                      <a
                                        className="Link__StyledLink-sc-pudy0l-0 dqeQwX sc-hsnvbz cUvhQ"
                                        data-bdd="tos-link"
                                        href="https://help.ticketmaster.com.mx/hc/es-mx/articles/12682192759825-Condiciones-de-Uso"
                                        tabIndex=""
                                        target="_blank"
                                        variant="primary">
                                        términos
                                      </a>
                                      y comprendes que la información se usará
                                      como se describe en nuestras
                                      <a
                                        className="Link__StyledLink-sc-pudy0l-0 dqeQwX sc-hsnvbz cUvhQ"
                                        data-bdd="privacy-policy-link"
                                        href="https://privacy.ticketmaster.com.mx/es/privacy-policy"
                                        tabIndex=""
                                        target="_blank"
                                        variant="primary">
                                        Política de Privacidad
                                      </a>
                                    </span>
                                  </p>
                                  <div
                                    bottom="[object Object]"
                                    className="sc-kgwOcj uDwjq"
                                    top="[object Object]">
                                    Según lo establecido en nuestra Política de
                                    Privacidad, podemos utilizar su información
                                    para marketing por correo electrónico,
                                    incluyendo promociones y actualizaciones
                                    sobre nuestros productos o los de terceros.
                                    Puede darse de baja de nuestros correos
                                    electrónicos de marketing en cualquier
                                    momento.
                                  </div>
                                  <p />
                                </div>
                              </div>
                            </div>
                          </form>
                        </main>
                        <div id="eps-captcha" style={{}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-focus-guard="true"
              style={{
                height: "0px",
                left: "1px",
                overflow: "hidden",
                padding: "0px",
                position: "fixed",
                top: "1px",
                width: "1px",
              }}
              tabIndex="0"
            />
          </div>
        </div>
      </div>
    </div>
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
    <div>
      <div
        className="grecaptcha-badge"
        data-style="none"
        style={{
          height: "60px",
          position: "fixed",
          visibility: "hidden",
          width: "256px",
        }}>
        <div className="grecaptcha-logo"></div>
        <div className="grecaptcha-error" />
        <textarea
          className="g-recaptcha-response"
          id="g-recaptcha-response-100001"
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
                    servicios que podemos ofrecer.
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
    </>
  )
}