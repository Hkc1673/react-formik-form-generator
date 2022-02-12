import styled from "styled-components"

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
` 
export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  padding: 5px;
  .form-title{
    color: #708090;
    padding-bottom: 5px;
    font-weight: 600;
  }
  label {
    color: #708090;
    padding-bottom: 5px;
  }
  span{
    color: #ff0000;
    margin-left:5px
  }
  i {
    color: #708090;
    font-size: 14px;
    letter-spacing: 1px;
    padding-bottom: 2px;
  }
  .form-text{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border: 1px solid #708090;
    border-radius: 5px;
    padding-left: 10px;
  }
  .form-control-text{
    flex: 10;
    border:none;
    &:focus {
      outline: none !important;
    }
  }
  .form-control {
    border: 1px solid #708090;
    height: 40px;
    width:100%;
    border-radius: 5px;
    padding-left: 10px;
    &:focus {
      outline: none !important;
    }
  }
  .form-password{
    padding:5px;
    width:25px;
    &:hover{
      cursor:pointer
    }
  }
  .form-error {
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 5px;
    color: #ff0000;
  }
`;

export const ButtonBox = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 button {
    width: 60%;
    height: 35px;
    border-radius: 5px;
    background-image: linear-gradient(to right,#00e600, #009900);
    font-weight: 600;
    letter-spacing: 2px;
    color: #fff;
    border: none;
    &:hover{
        cursor:pointer;
        background-image: linear-gradient(to right,#00b300, #008000);
        letter-spacing: 3px;
    }
    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
}
`