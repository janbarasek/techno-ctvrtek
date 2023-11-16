import {useQuery} from "@tanstack/react-query";

export type CtvrtekEndpointResponse = {
    datum: Date;
    ip: string | null;
    bornYear: number;
};

export const useCtvrtekQuery = (age?: number) => {
    return useQuery({
        queryKey: ['ctvrtecni-endpoint', age],
        queryFn: async (): Promise<CtvrtekEndpointResponse> =>
            (await fetch(`/api/v1/ctvrtecni-endpoint?age=${age}`)).json(),
        staleTime: 1000,
        refetchInterval: 10000,
        enabled: Number(age) > 0,
    });
};
