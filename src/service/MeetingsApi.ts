import AxiosInstance from './Instance';

const MeetingsApi = {
  getMeetingList: () =>
    AxiosInstance.get<ResponseBody<Meeting[]>>('/meeting/list'),
};

export default MeetingsApi;
