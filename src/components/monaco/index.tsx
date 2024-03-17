import './worker'
import { editor } from 'monaco-editor'
import { useEffect, useRef } from 'react'

const createEditor = editor.create

export type EditorIns = editor.IStandaloneCodeEditor
export type MonacoEditorOnDidChangeModelContent = EditorIns['onDidChangeModelContent']

interface MonacoEditorProps {
    value?: string
    height?: string | number
    moncaoEditorOptions?: editor.IStandaloneEditorConstructionOptions
}

interface MonacoEditorEvents {
    onChange?: (newValue: string) => void
}

export const MonacoEditor: React.FC<MonacoEditorProps & MonacoEditorEvents> = (props) => {
    const moncaoEditorRef = useRef<EditorIns>()
    const moncaoEditorDomRef = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        if (props.value && moncaoEditorRef.current) {
            moncaoEditorRef.current.setValue(props.value)
            if (props.onChange) {
                props.onChange(props.value)
            }
        }
    }, [props.value, props.onChange])
    useEffect(() => {
        createMonacoEditor()
    }, [moncaoEditorDomRef])

    /** 创建编辑器 */
    const createMonacoEditor = () => {
        if (moncaoEditorRef.current) {
            return
        }
        if (moncaoEditorDomRef.current) {
            moncaoEditorRef.current = createEditor(moncaoEditorDomRef.current, props.moncaoEditorOptions)
            if (props.onChange) {
                const value = moncaoEditorRef.current.getValue()
                props.onChange(value)
            }
        }
    }

    return (
        <div style={{ height: props.height }} className='monaco-editor-web' ref={moncaoEditorDomRef} />
    )
}

MonacoEditor.defaultProps = {
    moncaoEditorOptions: {
        tabSize: 4,
        fontSize: 18,
        language: 'json',
    }
}