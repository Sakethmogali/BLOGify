 const getTextfromHTML:(htmlcontent:string)=>string =(htmlcontent:string)=>{
    const tempdiv = document.createElement('div');
    tempdiv.innerHTML=htmlcontent;
    const text = tempdiv.innerText || tempdiv.textContent ||"";
    return text.split(/\s+/).slice(0,20).join(" ");
}
export default getTextfromHTML;