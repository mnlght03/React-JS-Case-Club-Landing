import React, { useState } from "react";
import SelectInput from "../ui/SelectInput";

export default function ContactForm({classes=''}) {
    const [value, setValue] = useState('');

    const contactOptions = ['Способ 1', 'Способ 2', 'Способ 3'];
    const projects = ['Case Hub', 'Образовательный курс', 'Case Week', 'Хакатоны'];

    return (
        <form action="" className={`flex flex-col gap-4 ${classes}`}>
            <input type="text" name="" id="" placeholder="ФИО"/>
            <input type="text" name="" id="" placeholder="Название компании"/>
            <input type="email" name="" id="" placeholder="Электронная почта"/>
            <input type="tel" name="" id="" placeholder="Телефон" />
            <SelectInput name={'contactOption'} placeholder={'Способ связи'} options={contactOptions} />
            <SelectInput name={'project'} placeholder={'Выберите проект'} options={projects} />
            <input type="submit" value="Отправить" />
        </form>
    );
}
