import { useCallback, useDeferredValue, useMemo, useState } from 'react'
import Header from './components/layout/Header'
import MainLayout from './components/layout/MainLayout'
import SectionCard from './components/layout/SectionCard'
import CardInformationForm from './components/form/CardInformationForm'
import CardPreview from './components/card/CardPreview'
import CardStyleSelector from './components/card/CardStyleSelector'
import CardLanguageSelector from './components/card/CardLanguageSelector'
import CardColorCustomizer from './components/card/CardColorCustomizer'
import CardSizeSelector from './components/card/CardSizeSelector'
import DownloadButton from './components/common/DownloadButton'
import Toast from './components/ui/Toast'
import { useCardForm } from './hooks/useCardForm'
import { useCardCustomization } from './hooks/useCardCustomization'
import { useCardExport } from './hooks/useCardExport'
import { DEFAULT_COLORS } from './constants/cardStudio'
import { UI } from './constants/translations'
import { buildCardData } from './utils/cardData'
import { buildFileName, isValidDimension } from './utils/cardHelpers'

function App() {
  const { form, errors, photoError, updateField, updatePhoto, validate, reset: resetForm } = useCardForm()
  const customization = useCardCustomization()
  const { exporting, download } = useCardExport()
  const [generated, setGenerated] = useState(false)
  const [notice, setNotice] = useState('')

  const ui = UI[customization.labelLanguage]

  // Keystrokes stay urgent; the card re-renders at a lower priority.
  const deferredForm = useDeferredValue(form)
  const deferredLabelLanguage = useDeferredValue(customization.labelLanguage)
  const deferredNumberLanguage = useDeferredValue(customization.numberLanguage)

  const card = useMemo(
    () => buildCardData(deferredForm, deferredLabelLanguage, deferredNumberLanguage),
    [deferredForm, deferredLabelLanguage, deferredNumberLanguage],
  )

  const validDimensions =
    isValidDimension(customization.width) && isValidDimension(customization.height)

  const generateCard = useCallback(() => {
    if (!validate()) {
      setGenerated(false)
      setNotice('required')
      return
    }
    if (!isValidDimension(customization.width) || !isValidDimension(customization.height)) {
      setNotice('dimensions')
      return
    }
    setGenerated(true)
    setNotice('generated')
  }, [validate, customization.width, customization.height])

  const downloadCard = useCallback(async () => {
    if (!generated) return
    setNotice('')
    const success = await download({
      card,
      templateId: customization.templateId,
      colors: customization.colors,
      width: customization.width,
      height: customization.height,
      fileName: buildFileName(form.fullName, form.cardTitle),
    })
    setNotice(success ? 'downloaded' : 'downloadFailed')
  }, [
    generated,
    download,
    card,
    customization.templateId,
    customization.colors,
    customization.width,
    customization.height,
    form.fullName,
    form.cardTitle,
  ])

  const resetAll = useCallback(() => {
    resetForm()
    customization.reset()
    setGenerated(false)
    setNotice('reset')
  }, [resetForm, customization])

  return (
    <div className="app-shell">
      <Header onReset={resetAll} ui={ui} />
      <MainLayout>
        <SectionCard className="information-panel" labelledBy="information-heading">
          <div className="panel-heading">
            <div>
              <span className="panel-kicker">{ui.informationKicker}</span>
              <h2 id="information-heading">{ui.informationTitle}</h2>
            </div>
            <span className="panel-number">01</span>
          </div>
          <CardInformationForm
            form={form}
            errors={errors}
            photoError={photoError}
            updateField={updateField}
            updatePhoto={updatePhoto}
            onGenerate={generateCard}
            ui={ui}
            labelLanguage={customization.labelLanguage}
          />
        </SectionCard>

        <SectionCard className="design-panel" labelledBy="preview-heading">
          <div className="panel-heading preview-heading">
            <div>
              <span className="panel-kicker">{ui.designKicker}</span>
              <h2 id="preview-heading">{ui.designTitle}</h2>
            </div>
            <span className="live-badge"><i /> {ui.live}</span>
          </div>

          <CardPreview
            card={card}
            templateId={customization.templateId}
            colors={customization.colors}
            width={customization.width}
            height={customization.height}
            ui={ui}
          />

          <CardLanguageSelector
            ui={ui}
            labelLanguage={customization.labelLanguage}
            numberLanguage={customization.numberLanguage}
            onLabelLanguage={customization.setLabelLanguage}
            onNumberLanguage={customization.setNumberLanguage}
          />

          <CardStyleSelector
            templateId={customization.templateId}
            onChange={customization.setTemplateId}
            ui={ui}
            labelLanguage={customization.labelLanguage}
          />

          <CardColorCustomizer
            colors={customization.colors}
            onChange={customization.setColors}
            onReset={() => customization.setColors(DEFAULT_COLORS)}
            ui={ui}
            labelLanguage={customization.labelLanguage}
          />

          <CardSizeSelector
            preset={customization.preset}
            width={customization.width}
            height={customization.height}
            onSelect={customization.selectSize}
            onDimension={customization.updateDimension}
            ui={ui}
          />

          <Toast message={notice ? ui.notices[notice] : ''} />
          <DownloadButton
            disabled={!generated || !validDimensions || exporting}
            exporting={exporting}
            onClick={downloadCard}
            ui={ui}
          />
          <p className="privacy-note">
            <span>{ui.privacyTag}</span> {ui.privacyNote}
          </p>
        </SectionCard>
      </MainLayout>
    </div>
  )
}

export default App
