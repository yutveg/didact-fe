import styled from "styled-components";

export const PersonWrapper = styled.div`
//   background-color: silver;
  border-radius: 7px;

  color: #5b5b5b;

  .person{
    border: 1px solid gray;
	width:30%;
	margin: 2% auto;
	padding: 2%;
	border-radius: 9px;
	background-color: #ffffff;
	color: color: #5b5b5b;
	box-shadow: 5px 5px 6px -2px whitesmoke;
    transition: transform 0.4s ease-in;
    text-align: left
  }
  .person:hover {
	// transform: translate(-5px) scale(1.03);
    // box-shadow: 10px 10px 10px -2px snow;
    border: 1px solid lightBlue;
}
.pEmail{
    font-weight:bold;
}
.eEdit{
    color: #5b5b5b;
}

  h3 {
    margin: 0;
    padding: 0;
    line-height: 22px;
    font-size: 22px;
    color: #5b5b5b;
  }
  a {
    width: 100%;
    display: block;
    text-align: right;
  }
  .link-anchor {
    color: #242424;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:visited {
      color: #242424;
    }
  }
`;

export const FormTitle = styled.h6`
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 15px;
`
export const DidactField = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`
export const DidactInput = styled.input`
    width: 92%;
    height: 32px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 10px auto;
    outline: none;
    ::placeholder {
        color: #90A1AC;
        
    }
`
export const DidactLabel = styled.label`
    margin: 15px 0 0 20px;
    padding-bottom: 0;
    color: #696D6E;
`
export const DidactTextArea = styled.textarea`
    width: 92%;
    /* height: 32px; */
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 10px auto;
    outline: none;
    resize: none;
    ::placeholder {
        color: #90A1AC;
    }
`
export const DidactTagForm = styled.input`
    width: 42%;
    height: 35px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 30px 10px;
    outline: none;
    ::placeholder {
        color: #90A1AC;
        
    }
`
export const DidactButton = styled.input`
    width: 42%;
    height: 35px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 30px 10px;
    outline: none;
    ::placeholder {
        color: #90A1AC;
        
    }
`

export const DidactForm = styled.input`
    width: 42%;
    height: 35px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 30px 10px;
    outline: none;
    ::placeholder {
        color: #90A1AC;
      }
      `

