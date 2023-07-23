import config from "@/config";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Announcement, IResponseAnnouncement } from "./announcement.interface";

export const announcementRTKProvider = createApi({
    reducerPath: "announcement",

    baseQuery: fetchBaseQuery({
        baseUrl: `${config.api.url}/announcement`,
        credentials: "same-origin",

        paramsSerializer(params) {
            return paramsSerializerUtils(params);
        }
    }),
    tagTypes: ["Announcement"],
    endpoints: (builder) => ({
        getAnnouncement: builder.query<Announcement[], void>({
            query: () => ({
                url: ``,
                method: "GET",
            }),
        }),
    }),

});
export const { useGetAnnouncementQuery } = announcementRTKProvider;
