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

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const SubmitButton = styled.button`
    width: ${props => props?.style?.width || '30%'} ;
    height: ${props => props?.style?.height || '35px'} ;
    background-color:${props => props?.style?.backgroundColor || '#60A728'} ;
    font-weight: ${props => props?.style?.fontWeight || "600"};
    font-size:${props => props?.style?.fontSize || '#16px'};
    color:${props => props?.style?.color || '#fff'};
    letter-spacing: 2px;
    border-radius: 5px;
    border: none;
    &:hover{
        cursor:pointer;
        letter-spacing: 3px;
    }
    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`