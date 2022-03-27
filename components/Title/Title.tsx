import { ReactElement } from 'react';

interface TitleProps {
    children: string;
}

export const Title = ({ children }: TitleProps): ReactElement => {
    return <h1 className="text-2xl pb-4">{children}</h1>;
};
