import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
${reset}

#root {
  font-family: 'Pretendard';
  box-sizing: border-box;

  --primary-100 :#E2E3FE;
  --primary-200 :#B6B7FD;
  --primary-300 :#888BFC;
  --primary-400 :#575DFB;
  --primary-500 :#1026F2;
  --primary-600 :#06149A;
  --primary-700 :#010548;


  --grey-100: #F1F1F1;
  --grey-200: #D6D6D6;
  --grey-300: #AFAFAF;
  --grey-400: #898989;
  --grey-500: #656565;
  --grey-600: #434343;
  --grey-700: #242424;

strong {
  font-weight: bold;
}

i {
  font-style: italic;
}

em {
  font-style: italic;
}

s {
  text-decoration: line-through;
}

/* ------------------------------------------------------240226 KGT edited---------------------------------------------------- */
* {
  letter-spacing: -0.028rem;
  word-break: keep-all;
}

.headerToggle {display:block;}
img.FooterLogo {
    height: fit-content;
}
.textArea {  
  height: 106px;
  min-height: 130px;
  max-height: 130px;
  border-radius:0;
}



/* ------------------------------------------------------240226 media width 1280---------------------------------------------------- */
/* main */
@media (max-width: 1280px){
  #main>div {
    padding: 32px 36px;
  }
  #main>div:first-child button {width:auto;}
  #main>div:nth-child(4) button {width:auto;}

  /* select-plan page */
  .cardWarp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: auto;
    margin: 0 auto;
  }

  /* featurePage */
  #featurePage>div:first-child {

  }
  #featurePage>div:nth-child(4)>div:last-child {
    width: auto;
  }
  #featurePage>div:nth-child(4)>div:last-child>div {width:auto; height: auto;}
}
/* ------------------------------------------------------240226 media width 1024---------------------------------------------------- */
@media (max-width: 1024px) {
  #main .R3ConWrap {
    flex-flow: column;
    align-items: center;
    gap: 32px;
    padding: 36px 0 24px;
  }
  #main>div:first-child>div {flex-flow:column-reverse;}
  #main>div:first-child>div>div:first-child {width:auto;}
  #root #main>div:first-child>div>div:first-child>div {
    gap: 0;
    margin-bottom: 24px;
  }
  #main .R3ConWrap>* {width: 52vw;}
  #main .landingPTitle {font-size: 32px;}
  #main .landingPSubTitle {font-size: 16px; margin-bottom:16px;}

  /* featurePage */
  #featurePage>div:first-child {
    padding-bottom: 0;
  }
  #featurePage>div:first-child>img {height: 80vh; object-fit: cover;}
  #featurePage>div:first-child>div:last-child {position: relative;}
  #featurePage>div:first-child>div:last-child img:nth-child(1) {bottom: 60px !important;}
  #featurePage>div:first-child>div:last-child img:nth-child(2) {bottom: 60px !important;}
  #featurePage>div:first-child>div:last-child img:nth-child(3) {bottom: 90px !important;}
  #featurePage>div:first-child>div:nth-child(2)>div:nth-child(1) {flex-flow: column; text-align:center;}
  #featurePage .disNone {
    display: none;
  }

  #featurePage>div:nth-child(2)>div{flex-flow: column; align-items: center;}
  #featurePage>div:nth-child(2)>div>div:first-child {position: static; width: 58%;}
  #featurePage>div:nth-child(2)>div>div:last-child {width:60%;}
  #featurePage>div:nth-child(2)>div>div:last-child>div {width:100%;}

  #featurePage>div:nth-child(3)>div {flex-flow: column;}

  #featurePage>div:nth-child(4) {flex-flow:column;}
  #featurePage>div:nth-child(4)>div {align-items: center;}
  #featurePage>div:nth-child(4)>div:first-child {gap: 0;}
  #featurePage>div:nth-child(4)>div:last-child {margin: 36px auto 0;}
  #featurePage>div:nth-child(4)>div:last-child>div {width:100%; height: auto;}


  .FooterWrap {width:100%;}
  .FooterCols {flex-flow: column; row-gap:36px; align-items: center;}
}

/* ------------------------------------------------------240226 media width 768---------------------------------------------------- */
@media (max-width: 768px) {

  #main .landingPTitle {font-size: 28px;}
  #main .landingPSubTitle {font-size: 16px;}

  #main .customerStory>div {flex-flow: column; align-items: center; padding: 24px 0;}
  #main .customerStory>div>div {gap: 36px;}
  #main .percentText>div span {font-size: 64px;}
  #main .percentText>div span>span {font-size: 48px;}
  #main .percentText>div span:nth-child(2) {font-size: 16px;}
  #main .percentBtns {justify-content: center;}
  /* Feature page */
  #featurePage>div:nth-child(2)>div>div:first-child {
    width: 80%;
  }
  #featurePage>div:nth-child(2)>div>div:last-child {
    width: 80%;
  }
  #featurePage>div:nth-child(4)>div:last-child {
    grid-template-columns: repeat(1, 1fr);
  }
  /* select-plan page */
  .cardWarp {
    display: grid;
    grid-template-columns: 1fr;
  }
}

/* ------------------------------------------------------240226 media width 500---------------------------------------------------- */
@media (max-width: 500px) {

  #main .landingPTitle {font-size: 26px;}
  #main .landingPSubTitle {font-size: 14px;}
  #main .percentText {flex-flow: column;}

  /* FAQ page */
  .faqBoxWarp {width: 95%;}
  .faqDetailBox {height: auto;}

  /* Feature page */
  .FreeTrialText {flex-flow: column;}

}


/* ------------------------------------------------------// 240226 KGT edited-------------------------------------------------- */
  }
`;