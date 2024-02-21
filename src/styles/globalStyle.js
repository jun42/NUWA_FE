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
}

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




.toolbar-top__container {
  display: flex;
  justify-content: flex-end;
}



#toolbar {
  display: flex;
  gap: 0.7rem;
  padding: 5px;
  align-items: center;
  border:none

  button {
    padding: 5px;
    border-radius: 4px;
  }

  .toolbar-top__icon {
    &:hover {
      background-color: #D6D6D6;
    }
    &:active {
      background-color: #AFAFAF;
    }
  }

  .toolbar-bottom__icon {
    &:hover {
      background-color: #434343;
    }
    &:active {
      background-color: #656565;
    }
  }


}
`;
