import React from 'react';

interface Props {
  id: 'logo' | 'change-theme' | 'rain' | 'rain-sun' | 'small-rain' | 'sun' | 'mainly' | 'close';
};

type component = JSX.Element | null;

export const GlobalSvgSelector = ({id}: Props): component => {
  switch (id) {
    case 'logo':
      return (
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF"/>
          <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8754L41.3829 9.79712L41.1963 14.2822L8.78809 46.265L27.0688 64.5458C28.8351 64.843 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD"/>
          <path d="M58.3388 29.0023L59.7103 28.1252L58.2388 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0266 58.3388 29.0023Z" fill="#FDBF2D"/>
          <path d="M57.4082 33.734L58.3451 35.0645L56.6275 35.378C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827"/>
          <path d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.2191 34.2883 40.9705 41.383 40.9705Z" fill="#FFE05F"/>
          <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239Z" fill="#F9CB0D"/>
          <path d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33777 32.5756 5.33777 38.4361C5.33777 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242Z" fill="white"/>
          <path d="M50.9302 40.6436C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2407 42.5272 32.2407C47.1684 32.2407 50.9302 36.0036 50.9302 40.6436Z" fill="#DAEFEC"/>
        </svg>
      );
    case 'change-theme':
      return (
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF"/>
        </svg>
      );
    case 'rain':
      return (
        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.21798 26.926L6.11798 31.924C5.79798 32.688 6.15598 33.568 6.91998 33.888C7.68398 34.208 8.56398 33.85 8.88398 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41798 25.804 8.53798 26.162 8.21798 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z" fill="#66AFEB"/>
          <path d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z" fill="url(#paint0_linear_2_526)"/>
          <path d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z" fill="url(#paint1_radial_2_526)"/>
          <defs>
          <linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9FC7FF"/>
          <stop offset="1" stop-color="#9BC1F5"/>
          </linearGradient>
          <radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
          <stop stop-color="#486DA8" stop-opacity="0.4"/>
          <stop offset="1" stop-color="#486DA8" stop-opacity="0"/>
          </radialGradient>
          </defs>
        </svg>
      );
    case 'rain-sun':
      return (
        <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 24C32.4183 24 36 20.4183 36 16C36 11.5817 32.4183 8 28 8C23.5817 8 20 11.5817 20 16C20 20.4183 23.5817 24 28 24Z" fill="url(#paint0_linear_2_531)"/>
          <path d="M26.96 1.45999L27.48 4.41399C27.828 6.38399 24.872 6.90399 24.526 4.93399L24.006 1.97999C23.658 0.00998566 26.614 -0.510014 26.96 1.45999ZM37.546 4.98199L35.826 7.43999C34.678 9.07799 32.222 7.35799 33.368 5.71999L35.088 3.26199C36.236 1.62399 38.692 3.34399 37.546 4.98199ZM16.984 6.45399L19.442 8.17399C21.08 9.32199 19.36 11.778 17.722 10.632L15.264 8.91199C13.626 7.76399 15.346 5.30799 16.984 6.45399ZM38.282 21.366L40.74 23.086C42.378 24.234 40.658 26.69 39.02 25.544L36.562 23.824C34.924 22.676 36.644 20.22 38.282 21.366ZM42.542 14.958L39.588 15.478C37.618 15.826 37.098 12.87 39.068 12.524L42.022 12.004C43.992 11.656 44.512 14.612 42.542 14.958Z" fill="#FFB300"/>
          <path d="M10.218 38.926L8.11798 43.924C7.79798 44.688 8.15598 45.568 8.91998 45.888C9.68398 46.208 10.564 45.85 10.884 45.086L12.984 40.088C13.304 39.324 12.946 38.444 12.182 38.124C11.418 37.804 10.538 38.162 10.218 38.926ZM20.218 36.926L18.118 41.924C17.798 42.688 18.156 43.568 18.92 43.888C19.684 44.208 20.564 43.85 20.884 43.086L22.984 38.088C23.304 37.324 22.946 36.444 22.182 36.124C21.418 35.804 20.538 36.162 20.218 36.926Z" fill="#66AFEB"/>
          <path d="M8 34C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C11.518 14.68 14.946 12 19 12C23.97 12 28 16.03 28 21C28 21.47 27.964 21.93 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8Z" fill="url(#paint1_linear_2_531)"/>
          <path d="M10 21C10 25.97 14.03 30 19 30C23.502 30 27.23 26.696 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C10.136 19.198 10 20.082 10 21Z" fill="url(#paint2_radial_2_531)"/>
          <defs>
          <linearGradient id="paint0_linear_2_531" x1="36" y1="8" x2="24.7832" y2="19.0723" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFB301"/>
          <stop offset="1" stop-color="#FFC533"/>
          </linearGradient>
          <linearGradient id="paint1_linear_2_531" x1="18" y1="12" x2="18" y2="34" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9FC7FF"/>
          <stop offset="1" stop-color="#9BC1F5"/>
          </linearGradient>
          <radialGradient id="paint2_radial_2_531" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
          <stop stop-color="#486DA8" stop-opacity="0.4"/>
          <stop offset="1" stop-color="#486DA8" stop-opacity="0"/>
          </radialGradient>
          </defs>
        </svg>
      );
    case 'small-rain':
      return (
        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.218 26.926L8.11798 31.924C7.79798 32.688 8.15598 33.568 8.91998 33.888C9.68398 34.208 10.564 33.85 10.884 33.086L12.984 28.088C13.304 27.324 12.946 26.444 12.182 26.124C11.418 25.804 10.538 26.162 10.218 26.926V26.926ZM20.218 24.926L18.118 29.924C17.798 30.688 18.156 31.568 18.92 31.888C19.684 32.208 20.564 31.85 20.884 31.086L22.984 26.088C23.304 25.324 22.946 24.444 22.182 24.124C21.418 23.804 20.538 24.162 20.218 24.926Z" fill="#66AFEB"/>
          <path d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z" fill="url(#paint0_linear_2_538)"/>
          <path d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z" fill="url(#paint1_radial_2_538)"/>
          <defs>
          <linearGradient id="paint0_linear_2_538" x1="18" y1="0" x2="18" y2="22" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9FC7FF"/>
          <stop offset="1" stop-color="#9BC1F5"/>
          </linearGradient>
          <radialGradient id="paint1_radial_2_538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
          <stop stop-color="#486DA8" stop-opacity="0.4"/>
          <stop offset="1" stop-color="#486DA8" stop-opacity="0"/>
          </radialGradient>
          </defs>
        </svg>
      );
    case 'sun':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0092 35.5016C30.3584 35.5016 35.5055 30.3547 35.5055 24.0058C35.5055 17.6568 30.3584 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z" fill="url(#paint0_linear_2_547)"/>
          <path d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z" fill="#FFB300"/>
          <defs>
          <linearGradient id="paint0_linear_2_547" x1="24.0092" y1="12.5099" x2="24.0092" y2="35.1951" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC227"/>
          <stop offset="1" stop-color="#FFB300"/>
          </linearGradient>
          </defs>
        </svg>
      );
    case 'mainly':
      return (
        <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.32" d="M34 21C37.314 21 40 18.314 40 15C40 11.686 37.314 9 34 9H33.938C33.978 8.672 34 8.338 34 8C34 3.582 30.418 0 26 0C22.5 0 19.524 2.248 18.44 5.378C17.67 5.132 16.852 5 16 5C11.582 5 8 8.582 8 13C8 17.418 11.582 21 16 21C16.69 21 17.36 20.912 18 20.748V21H34Z" fill="#73A5E6"/>
          <path d="M8 31C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C11.518 11.68 14.946 9 19 9C23.97 9 28 13.03 28 18C28 18.47 27.964 18.93 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8Z" fill="url(#paint0_linear_2_551)"/>
          <path d="M10 18C10 22.97 14.03 27 19 27C23.502 27 27.23 23.696 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C10.136 16.198 10 17.082 10 18Z" fill="url(#paint1_radial_2_551)"/>
          <defs>
          <linearGradient id="paint0_linear_2_551" x1="18" y1="9" x2="18" y2="31" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9FC7FF"/>
          <stop offset="1" stop-color="#9BC1F5"/>
          </linearGradient>
          <radialGradient id="paint1_radial_2_551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.9439 -29.6966) rotate(-90) scale(20.9574 6.69705)">
          <stop stop-color="#486DA8" stop-opacity="0.4"/>
          <stop offset="1" stop-color="#486DA8" stop-opacity="0"/>
          </radialGradient>
          </defs>
        </svg>
      );
    case 'close':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z" fill="#4793FF"/>
          <path d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7198C5.9269 11.0126 5.9269 11.4874 6.21978 11.7803C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7803L9.00003 10.0605L10.7198 11.7803C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7803C12.0731 11.4874 12.0731 11.0126 11.7803 10.7198L10.0605 9Z" fill="#4793FF"/>
        </svg>
      );
    default: 
      return null;
  }
}