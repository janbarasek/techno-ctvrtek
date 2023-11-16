'use client';

import {FC, ReactNode} from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

export const TechnoWrapper: FC<Props> = ({children}) => (
    <div style={{border: '1px solid red', margin: 12}}>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            {children}
        </QueryClientProvider>
    </div>
);
