'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Box } from '@chakra-ui/react';

export const AddHighlightForm = ({ addHighlightToDB, bookId }) => {
  const [highlightError, setHighlightError] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.book_id = bookId;
    addHighlightToDB(data).then((res) => {
      if (res && res.error) setHighlightError(res.error.message);
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <input defaultValue="" {...register('text', { required: true })} />
        </Box>
        {errors.text && <Box>Highlight Required</Box>}
        <Box>{highlightError}</Box>

        <Box>
          <input type="submit" />
        </Box>
      </form>
    </Container>
  );
};
