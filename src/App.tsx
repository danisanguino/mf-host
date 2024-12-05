import React from 'react'
import ReactDOM from 'react-dom/client'
// import 
import { ColorPicker } from 'mf_colorpicker/ColorPicker';
import { ColorList } from 'mf_colorlist/ColorList';
import { useColors } from 'mf_colorpicker/useColors';



const App = () => {

  const {color, colorsList, handleChangeColor, handleSubmitSaveColor} = useColors();
  
  return (
  <>
    <h1 className='text-center bg-dark text-white p-4'>Color Picker</h1>
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <ColorList colorsList={colorsList}/>
        </div>
        <div className='col-12 col-md-8'>
          <ColorPicker color={color} handleChangeColor={handleChangeColor} handleSubmitSaveColor={handleSubmitSaveColor}/>
        </div>
      </div>
    </div>

  </>
)
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)