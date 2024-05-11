# TypeWriterText Component

This component is a simple typewriter effect for text.

## Usage

```tsx
import { TypeWriterText } from '@components';

<TypeWriterText
  fixedText="Hello World"
  textSequence={[
    {
      text: 'Hello',
      time: 1000,
    },
    {
      text: 'World',
      time: 1000,
    },
  ]}
  typeSpeed={50}
  deleteSpeed={50}
/>;
```

## Speed allowed

The speed of the typewriter effect is controlled by the `typeSpeed` prop. The speed is in milliseconds and the default is 50.
Allowed values are between 0 and 100. [1 , 99]

## Sequence of text

The `textSequence` prop allows you to display a sequence of text. The text will be displayed in the order of the array for time mentioned in the array.

```tsx
{
text: 'Hello',
time: 1000
}
```

## Props

| Name         | Type       | Default  | Description                          |
| ------------ | ---------- | -------- | ------------------------------------ |
| fixedText    | string     | required | The text to be displayed             |
| textSequence | sequence[] | required | The text to be displayed in sequence |
| typeSpeed    | number     | 50       | The speed of the typewriter effect   |
| deleteSpeed  | number     | 50       | The speed of the delete effect       |
