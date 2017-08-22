import { h } from 'preact'
import Dropzone from 'react-dropzone'
import theme from '../Theme/style.css'
import style from './style.css'
import {errors} from '../strings/errors'
import { trackComponentAndMode } from '../../Tracker'
import MobileLink from '../MobileLink'

const instructionsCopy = (method, side) => {
  const instructions = isDesktop ? desktopCopy.instructions : mobileCopy.instructions
   return method === 'document' ? instructions[method][side] : instructions[method]
}

const UploadInstructions = ({error, method, side}) =>
  <div className={style.base}>
    <span className={`${theme.icon} ${style.icon}`}></span>
    <p className={style.text}>{instructionsCopy(method, side)}</p>
    <UploadError error={errors[error.name]} />
  </div>


const UploadError = ({error}) =>
  error && <div className={`${style.text} ${style.error}`}>{`${error.message}. ${error.instruction}.`}</div>

const UploaderPure = ({method, onImageSelected, error, token, finalStep}) =>
  <div>
    <Dropzone
      onDrop={([ file ])=> {
        //removes a memory leak created by react-dropzone
        URL.revokeObjectURL(file.preview)
        delete file.preview
        onImageSelected(file)
      }}
      multiple={false}
      className={style.dropzone}
    >
      {<UploadInstructions error={error}/>}
    </Dropzone>
    { method === 'face' ? <MobileLink methods={['face']} token={token} finalStep={finalStep} /> : null }
  </div>

export const Uploader = trackComponentAndMode(UploaderPure, 'file_upload', 'error')
