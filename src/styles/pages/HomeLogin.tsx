import styled from 'styled-components';

export const Root = styled.div`
  display: grid;
  grid-template-areas: 'logo nav';
  height: 100vh;

  @media(max-width: 600px) {
    display: flex;
    position: 'relative';
  }
`;

export const Logo = styled.div`
  grid-area: logo;
  width: 60vw;
  background-position: center;
  background-size: cover;
  background-image: url('/images/home.png'),
    linear-gradient(to top, #130525 0%, rgba(105, 57, 153, 0) 100%);
  background-blend-mode: darken;

  @media(max-width: 960px) {
      width: 40vw;    
  }

  @media(max-width: 600px) {
    width: 100vw;
  }
`;

export const NavLogin = styled.div`
  grid-area: nav;
  width: calc(40vw - 112px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 112px;

  @media(max-width: 960px) {
    padding-left: 80px;
    width: calc(60vw - 80px);
  }

  @media(max-width: 600px) {    
    position: absolute;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 518px;

  h1 {
    font-size: 40px;
    width: 231px;
    color: #383e71;
    margin-bottom: 16px;
    font-weight: 400;
    line-height: 48px;
    @media(max-width: 600px) { 
      font-size: 24px;
      width: 139px;
      font-weight: 400;
      line-height: 32px;
    }
  }

  h6 {
    font-size: 16px;
    width: 222px;
    color: #989fdb;
    font-weight: 600;
    margin-bottom: 27px;
    line-height: 20px;
    @media(max-width: 600px) { 
      font-size: 12px;
      width: 255px;
      margin-bottom: 20px;
      
    }
  }

  @media(max-width: 600px) {   
    background-color: #FAF5FF;
    border-radius: 8px;
    width: 311px;
    height: 357px;
    position: relative;
    align-items: center;
  }

`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 10px;   
    width: 72px;
    height: 14px;
    color: #383e71;
    margin: 16px 0 8px 11px;
    text-transform: uppercase;
  }  

  button {
    width: 256px;
    height: 48px;
    color: #fff;
    text-transform: uppercase;
    background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
    box-shadow: 0px 10px 25px #cf99db;
    border-radius: 8px;
    margin-bottom: 32px;
    border: none;
    margin-top: 24px;
    font-weight: 600;
    cursor: pointer;
    :hover {      
      background: linear-gradient(267.79deg, #9d25b0 0%, #383e71 99.18%);
    }

    @media(max-width: 600px) { 
      width: 168px; 
      margin: 0;
      position: absolute;
      bottom: -24px;
      left: calc(50% - 84px)
    }
  }

  p {
    width: 223px;
    height: 14px;
    font-size: 10px;    
    color: #FF377F;
    margin: 8px 0 8px 11px;    
  }

  input.error {
    border: 1px solid #FF377F;
  }
`;

export const Input = styled.input`
  width: 256px;
  height: 48px;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #faf5ff;
  padding: 17px;  
`
export const CloseIcon = styled.div`
  position: absolute; 
    right: 15px;
    top: calc(50% - 8px); 
    width: 10px;
    cursor: pointer;
`

export const ForgotPassword = styled.p`
    width: 212px;
    height: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #989fdb;
    align-self: center;

    @media(max-width: 600px) {      
      margin: 0;
      position: absolute;
      bottom: -87px;   
      color: #fff;   
      a {
        color: #fff;
      }
    }
`
