import { useState } from 'react';

function EntryField(props) {
	const [form, setForm] = useState({ name: '' });
	const colorDefault = props.colorDefault;

	const handleChange = evt => {
		const { name, value } = evt.target;
		setForm(prevForm => ({ ...prevForm, [name]: value }));

		if (form.name.length === 7 && form.name[0] === '#') {
			handleSubmit(evt)
		}
	}

	function handleSubmit(evt) {
		if (form.name.length === 7 && form.name[0] === '#') {
			evt.preventDefault();
			props.hexColor(form.name);
			setForm({ name: '' });
		} else {
			evt.preventDefault();
			setForm({ name: form.name });
			props.hexColor("Ошибка!");
		}
	}
	return (
		<div className="hex__form">
			<form onSubmit={handleSubmit}>
				<input placeholder={colorDefault} name='name' value={form.name} onChange={handleChange} />
			</form>
		</div>

	);
}

export default EntryField;