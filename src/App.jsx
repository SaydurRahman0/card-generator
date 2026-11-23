import { useState } from 'react'
import Header from './components/layout/Header'
import MainLayout from './components/layout/MainLayout'
import SectionCard from './components/layout/SectionCard'
import CardInformationForm from './components/form/CardInformationForm'
import CardPreview from './components/card/CardPreview'
import CardStyleSelector from './components/card/CardStyleSelector'
import CardColorCustomizer from './components/card/CardColorCustomizer'
import CardSizeSelector from './components/card/CardSizeSelector'
import DownloadButton from './components/common/DownloadButton'
import Toast from './components/ui/Toast'
import GeneratedCard from './components/card/GeneratedCard'
import { useCardForm } from './hooks/useCardForm'
import { useCardCustomization } from './hooks/useCardCustomization'
import { useCardExport } from './hooks/useCardExport'
import { DEFAULT_COLORS } from './constants/cardStudio'

function App() {
  const { form, errors, photoError, updateField, updatePhoto, validate, reset: resetForm } = useCardForm()
  const customization = useCardCustomization()
  const { exportRef, exporting, download } = useCardExport()
  const [generated, setGenerated] = useState(false)
  const [notice, setNotice] = useState('')

  const validDimensions = Number(customization.width) >= 100 && Number(customization.height) >= 100

  const generateCard = () => {
    if (!validate()) {
      setGenerated(false)
      setNotice('Please complete the required fields.')
      return
    }
    if (!validDimensions) {
      setNotice('Please enter dimensions of at least 100 px.')
      return
    }
    setGenerated(true)
    setNotice('Card generated successfully.')
  }

  const downloadCard = async () => {
    if (!generated) return
    setNotice('')
    const success = await download({ form, width: customization.width, height: customization.height })
    setNotice(success ? 'PNG downloaded successfully.' : 'Download failed. Please try again.')
  }

  const resetAll = () => {
    resetForm()
    customization.reset()
    setGenerated(false)
    setNotice('Card Studio reset to defaults.')
  }

  return (
    <div className="app-shell">
      <Header onReset={resetAll} />
      <MainLayout>
        <SectionCard className="information-panel" labelledBy="information-heading">
          <div className="panel-heading">
            <div><span className="panel-kicker">Card details</span><h2 id="information-heading">Card information</h2></div>
            <span className="panel-number">01</span>
          </div>
          <CardInformationForm
            form={form}
            errors={errors}
            photoError={photoError}
            updateField={updateField}
            updatePhoto={updatePhoto}
            onGenerate={generateCard}
          />
        </SectionCard>

        <SectionCard className="design-panel" labelledBy="preview-heading">
          <div className="panel-heading preview-heading">
            <div><span className="panel-kicker">Workspace</span><h2 id="preview-heading">Card preview</h2></div>
            <span className="live-badge"><i /> Live</span>
          </div>

          <CardPreview
            form={form}
            style={customization.style}
            colors={customization.colors}
            width={customization.width}
            height={customization.height}
          />

          <CardStyleSelector style={customization.style} onChange={customization.setStyle} />
          <CardColorCustomizer
            colors={customization.colors}
            onChange={customization.setColors}
            onReset={() => customization.setColors(DEFAULT_COLORS)}
          />
          <CardSizeSelector
            preset={customization.preset}
            width={customization.width}
            height={customization.height}
            onSelect={customization.selectSize}
            onDimension={customization.updateDimension}
          />

          <Toast message={notice} />
          <DownloadButton
            disabled={!generated || !validDimensions || exporting}
            exporting={exporting}
            onClick={downloadCard}
          />
          <p className="privacy-note"><span>Privacy</span> Your information stays in your browser. Nothing is uploaded or stored.</p>
        </SectionCard>
      </MainLayout>

      {validDimensions && (
        <div className="export-host" aria-hidden="true">
          <GeneratedCard
            form={form}
            style={customization.style}
            colors={customization.colors}
            width={Number(customization.width)}
            height={Number(customization.height)}
            cardRef={exportRef}
          />
        </div>
      )}
    </div>
  )
}

export default App
