<template>
  <div class="absolute h-fit bg-gray-200">
    <div class="relative mx-auto h-full w-6/12 bg-white">
      <Label :informations="informations" :skills="skills"/>
      <Detail :backgrounds="backgrounds"/>
      <Picshow />
    </div>
  </div>
</template>

<script>
import Label from './components/Label.vue';
import Detail from './components/Detail.vue';
import Picshow from './components/Pic.vue';

export default {
  name: 'App',
  components: {
    Label,
    Detail,
    Picshow,
  },
  data() {
    return {
      informations: [
        {
          picLinks: 'https://img.icons8.com/ios/50/000000/calendar--v1.png',
          values: '02/12/1999',
          flags: false,
        },
        {
          picLinks: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-male-basic-ui-elements-flatart-icons-outline-flatarticons.png',
          values: 'Nam',
          flags: false,
        },
        {
          picLinks: 'https://img.icons8.com/ios/50/000000/apple-phone.png',
          values: '(+81)70-2362-1575',
          flags: false,
        },
        {
          picLinks: 'https://img.icons8.com/ios/50/000000/email-open.png',
          values: 'nguyen.hai.phong.uv@tut.jp',
          flags: true,
          htmlLinks: 'mailto: nguyen.hai.phong.uv@tut.jp',
          mouseOn: 'hover:bg-blue-600',
        },
        {
          picLinks: 'https://img.icons8.com/ios/50/000000/facebook-new.png',
          values: 'http://facebook.com/haiphong0212',
          flags: true,
          htmlLinks: 'http://facebook.com/haiphong0212',
          mouseOn: 'hover:bg-blue-600',
        },
        {
          picLinks: 'https://img.icons8.com/wired/64/000000/home.png',
          values: 'Toyohashi University of Technology, 1-1 Hibarigaoka, Tenpaku town, Toyohashi city, Aichi prefecture',
          flags: false,
        },
      ],
      skills: [
        {
          values: 'CÁC KĨ NĂNG',
          details: [
            {
              details_name: 'Sử dụng tốt các công cụ Word, Excel, Power Point',
            },
            {
              details_name: 'Khả năng giao tiếp bằng tiếng Anh và tiếng Nhật',
            },
            {
              details_name: 'Kinh nghiệm trong vẽ kĩ thuật 2D bằng CAD và 3D bằng Solid Work',
            },
            {
              details_name: 'Kinh nghiệm trong sử dụng MATLAB',
            },
          ],
        },
        {
          values: 'CHỨNG CHỈ',
          details: [
            {
              details_name: 'JLPT: N1',
            },
            {
              details_name: 'TOEIC L&R: 715',
            },
            {
              details_name: 'Paiza: rank B',
            },
          ],
        },
        {
          values: 'SỞ THÍCH',
          details: [
            {
              details_name: 'Thể thao: Bóng đá, Cầu lông',
            },
            {
              details_name: 'Âm nhạc: Fan hâm mộ của nhóm nhạc Bức Tường',
            },
          ],
        },
      ],
      backgrounds: [
        {
          name: 'MỤC TIÊU NGHỀ NGHIỆP',
          details: [
            {
              properties: [
                {
                  property_value: 'Mở rộng hiểu biết về Công Nghệ Thông Tin. Ứng dụng những kinh nghiệm về Cơ Khí và Tổ Chức Sự Kiện để trở thành nhân viên đa năng. Từ đó giúp công ty mở rộng tệp khách hàng',
                },
              ],
            },
          ],
        },
        {
          name: 'HỌC VẤN',
          details: [
            {
              places: 'Học viện Kamimura',
              times: '10/2018 ~ 03/2020',
              positions: '(Chuyên ngành Nhật Ngữ - Đã tốt nghiệp)',
              properties: [
                {
                  property_value: 'Tốt nghiệp loại giỏi',
                },
                {
                  property_value: 'Tích cực tham gia các hoạt động của trường và thành tích học tập tốt, nhận giải thưởng “Ưu Lương” (優良賞)',
                },
              ],
            },
            {
              places: 'Đại học Khoa Học Kĩ Thuật Toyohashi',
              times: '04/2020 ~ 03/2024',
              positions: '(Chuyên ngành Cơ Khí - Năm 2)',
              properties: [
                {
                  property_value: 'Điểm trung bình học kì 1 năm 2 đạt 3.7/4.0, xếp hạng nhì trong khoa',
                },
              ],
            },
          ],
        },
        {
          name: 'KINH NGHIỆM LÀM VIỆC',
          details: [
            {
              places: 'Siêu thị Daiwa',
              times: '10/2018~ 03/2020',
              positions: '(Nhân viên bán hàng)',
              properties: [
                {
                  property_value: 'Công việc cơ bản là thu ngân',
                },
                {
                  property_value: 'Đảm nhiệm hướng dẫn công việc cho người mới',
                },
              ],
            },
            {
              places: 'Siêu thị Mega Donki Quote',
              times: '04/2021~ 03/2022',
              positions: '(Nhân viên bán hàng)',
              properties: [
                {
                  property_value: 'Công việc cơ bản là thu ngân',
                },
                {
                  property_value: 'Giao tiếp tiếng Anh với khách hàng ngoại quốc',
                },
                {
                  property_value: 'Thông dịch Nhật - Việt cho khách hàng và người quản lí',
                },
              ],
            },
          ],
        },
        {
          name: 'HOẠT ĐỘNG',
          details: [
            {
              places: 'Hội Thanh Niên và Sinh Viên Việt Nam tại Tokai, Nhật Bản (VYSA Tokai)',
              times: '04/2021 ~ 12/2021',
              positions: '(Phó Chủ Tịch, Trưởng Ban Đối Ngoại)',
              properties: [
                {
                  property_value: 'Chịu trách nhiệm chính trong việc tổ chức sự kiện cho người Việt tại vùng Tokai, Nhật Bản',
                },
                {
                  property_value: 'Đảm nhận vai trò kêu gọi tài trợ từ các công ty tại Nhật',
                },
                {
                  property_value: 'Mời hợp tác ghi hình các buổi chia sẻ kinh nghiệm về Khởi Nghiệp, Học Tập, Sinh Sống tại Nhật Bản',
                },
              ],
            },
            {
              places: 'Hội sinh viên sống tại Nhà Quốc Tế',
              times: '04/2021 ~',
              positions: '(Phó Hội Trưởng)',
              properties: [
                {
                  property_value: 'Quản lí tất cả các hoạt động liên quan gồm : Thiết lập luật lệ, Liên lạc với Nhà Trường, Tổ chức sự kiện và Quản lí cơ sở vật chất',
                },
                {
                  property_value: 'Lên kế hoạch Truyền Thông trên Instagram',
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
