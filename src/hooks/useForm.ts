import { useState } from 'react';

export function useForm(initialValue: string = '') {
  const [title, setTitle] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (text: string) => {
    setTitle(text);
    if (text.trim()) setError('');
  };

  const validate = (): boolean => {
    if (!title.trim()) {
      setError('Task title is required');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setTitle('');
    setError('');
  };

  return {
    title,
    error,
    setTitle,
    setError,
    handleChange,
    validate,
    resetForm,
  };
}
