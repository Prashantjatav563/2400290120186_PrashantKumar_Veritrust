const tabs=document.querySelectorAll('.tab');
const textPanel=document.getElementById('text-panel');
const urlPanel=document.getElementById('url-panel');
const articleText=document.getElementById('articleText');
const articleUrl=document.getElementById('articleUrl');
const result=document.getElementById('result');

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const mode=tab.dataset.mode;
    textPanel.classList.toggle('hidden',mode!=='text');
    urlPanel.classList.toggle('hidden',mode!=='url');
  });
});

document.getElementById('verifyBtn').addEventListener('click',()=>{
  const text=articleText.value.trim();
  const url=articleUrl.value.trim();
  const content=text || url;
  if(!content){
    alert('Please enter article text or a URL first.');
    return;
  }
  const words=text ? text.split(/\s+/).filter(Boolean).length : 0;
  const minutes=Math.max(1,Math.ceil(words/200));
  document.getElementById('wordCount').textContent=words;
  document.getElementById('readTime').textContent=words ? `${minutes} min` : 'URL';
  document.getElementById('resultText').textContent=
    'This S3-hosted frontend is a presentation/demo layer. Live fake-news prediction requires the Python/Streamlit machine-learning backend from the original project.';
  result.classList.remove('hidden');
  result.scrollIntoView({behavior:'smooth',block:'center'});
});
