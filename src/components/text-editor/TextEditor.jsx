import './text-editor.css';
import React from 'react';
import { Accordion, AccordionItem } from '../accordion/Accordion';
import TextInput from '../text-input/TextInput';
import { ArrowsClockwise } from '@phosphor-icons/react';

const fields = ['year', 'album', 'artist', 'date', 'duration', 'label'];

function TextEditor(props){
    const { poster, setPoster } = props;

    function handleTextInputChange(e, key, index = 0){
        const { value } = e.target;
        const newPoster = { ...poster };

        if(Array.isArray(poster['data'][key])){
            newPoster.data[key][index] = value;
            setPoster(newPoster);
        } else {
            newPoster.data[key] = value;
            setPoster(newPoster);
        };
    };

    return (
        <div className='text-editor'>
            <Accordion>
                <AccordionItem title={'general'}>
                {fields.map((field) => (
                    <TextInput
                        key={field}
                        inputName={field}
                        inputValue={poster['data'][field]}
                        handleOnChange={(e) => handleTextInputChange(e, field)}
                    />
                ))}
                {(poster.data['genre']).map((data, index) => (
                    <TextInput
                        key={`Genre + ${index + 1}`}
                        inputName={`Genre # ${index + 1}`}
                        inputValue={data}
                        handleOnChange={(e) => handleTextInputChange(e, 'genre', index)}
                    />
                ))}
                </AccordionItem>
                <AccordionItem title={'advanced'}>
                    {(poster.data['tracklist']).map((data, index) => (
                        <TextInput
                            key={`Track ${index + 1}`}
                            inputName={`Track ${index + 1}`}
                            inputValue={data}
                            handleOnChange={(e) => handleTextInputChange(e, 'tracklist', index)}
                        />
                    ))}
                </AccordionItem>
            </Accordion>
        </div>
    )
};

export default TextEditor;