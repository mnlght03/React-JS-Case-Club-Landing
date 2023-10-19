import React, {useState} from "react";
import SelectInput from "../ui/SelectInput";
import Input from "../ui/Input";

export default function ContactForm({classes = ''}) {
    const [value, setValue] = useState('');

    const contactOptions = ['Способ 1', 'Способ 2', 'Способ 3'];
    const projects = ['Case Hub', 'Образовательный курс', 'Case Week', 'Хакатоны'];

    const [contactChosen, setContactChosen] = useState('');
    const [projectChosen, setProjectChosen] = useState('');

    // const handleSubmit = () => {
    //
    // }

    return (
        <form action="" className={`flex flex-col gap-4 ${classes}`}>
            <Input type="text" name="" id="" placeholder="ФИО" required />
            <Input type="text" name="" id="" placeholder="Название компании" required />
            <Input type="email" name="" id="" placeholder="Электронная почта" required />
            <Input type="tel" name="" id="" placeholder="Телефон" required />
            <SelectInput
                name={'contactOption'}
                placeholder={'Способ связи'}
                options={contactOptions}
                onSelect={setContactChosen}
            />
            <SelectInput
                name={'project'}
                placeholder={'Выберите проект'}
                options={projects}
                onSelect={setProjectChosen}
            />
            <input type="submit" value="Отправить" className={'text-white mt-4 ml-4 cursor-pointer w-fit'}/>
        </form>
    );
}
