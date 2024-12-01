import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import materials from '../assets/data/materials.json';


function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
}
// function switchSidebar(){
//   isOpened = !isOpened;
// }

// const isOpened = false;

function Materials() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [isOpened, switchOpened] = useState(false);

  return (
    <Layout>
      <div className='materials'>
        {isOpened ?
        <div className='sidebar'>
          <h1>Учебные материалы</h1>
          <ul>
            { materials.map((material) => (
              <li 
                key={material.id}
                className={material.id === selectedMaterial.id ? 'active' : ''}
                onClick={() => setSelectedMaterial(material)}
              >
                {material.title}
              </li>
            ))}
          </ul>
        </div> : <h2 onClick={() => {switchOpened(true)}}>OPEN</h2>}
        <div className='container'>
        <div className='content'>
          <h2>{selectedMaterial.title}</h2>
          {selectedMaterial.content.map((item, index) => {
            switch (item.type) {
              case 'text':
                return <p key={index}>{item.value}</p>;
              case 'code':
                return (
                  <div key={index} className="code-block">
                    <SyntaxHighlighter language={item.language} >
                      {item.value}
                    </SyntaxHighlighter>
                    <button onClick={() => copyToClipboard(item.value)} className="copy-btn">Копировать</button>
                  </div>
                );
              case 'image':
                return <img key={index} src={item.src} alt={item.alt} />;
              default:
                return null;
            }
          })}
        </div>

        </div>
      </div>
    </Layout>
  );
}

export default Materials;
