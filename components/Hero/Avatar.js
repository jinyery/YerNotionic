// https://react-svgr.com/playground/
import * as React from 'react'

const Avatar = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 500 500'
    style={{
      opacity: 1
    }}
    {...props}>

    {/* <image x='0' y='0' width='100%' height='100%' clip-path='url(#shape)' href='https://' preserveAspectRatio='none'></image> */}
    <path id='blob' fill='purple'
      style={{
        opacity: '0.02'
      }}
    >
      <animate attributeName='d' dur='25s' repeatCount='indefinite' values='M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z'></animate>
    </path>
    <path id='blob' fill='yellow'
      style={{
        opacity: '0.04'
      }}
    >
      <animate attributeName='d' dur='25s' repeatCount='indefinite' values='M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z'></animate>
    </path>
    <path id='blob' fill='orange'
      style={{
        opacity: '0.06'
      }}
    >
      <animate attributeName='d' dur='25s' repeatCount='indefinite' values='M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z'></animate>
    </path>
    <path id='blob' fill='red'
      style={{
        opacity: '0.08'
      }}
    >
      <animate attributeName='d' dur='25s' repeatCount='indefinite' values='M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z'></animate>
    </path>
    <path id='blob' fill='blue'
      style={{
        opacity: '0.10'
      }}
    >
      <animate attributeName='d' dur='25s' repeatCount='indefinite' values='M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z'></animate>
    </path>
    <g
      transform='translate(130,350) scale(0.025000,-0.025000)'
      fill='currentColor'
      style={{
        opacity: '0.8'
      }}
    >
      <path d="M5341 7935 c-41 -37 -71 -89 -71 -123 0 -11 17 -44 37 -73 20 -30 74 -135 120 -233 l83 -179 0 -193 c0 -197 -18 -554 -45 -884 -8 -102 -22 -288 -30 -415 -16 -237 -44 -555 -70 -800 -8 -77 -23 -250 -35 -385 -32 -388 -51 -573 -61 -607 -13 -40 -26 -50 -319 -233 -239 -150 -474 -280 -505 -280 -31 0 -37 49 -31 255 7 233 27 472 61 745 13 107 29 276 35 375 6 99 19 308 30 465 34 508 31 1234 -5 1350 -46 146 -142 237 -380 358 -141 72 -285 102 -285 59 0 -8 16 -32 36 -55 20 -24 38 -57 41 -78 5 -30 17 -44 74 -86 122 -88 114 -55 112 -478 -1 -306 -7 -445 -37 -860 -19 -272 -42 -616 -51 -765 -8 -148 -19 -342 -25 -430 -6 -88 -15 -281 -20 -430 -13 -361 -50 -607 -110 -726 -29 -55 -106 -112 -245 -179 -253 -123 -588 -217 -1084 -305 -108 -19 -225 -41 -261 -50 l-65 -15 151 5 c83 3 203 12 265 20 324 44 732 148 985 250 186 75 184 75 247 27 94 -71 203 -180 191 -192 -6 -6 -84 -20 -175 -31 -195 -23 -341 -50 -503 -90 -208 -52 -447 -100 -605 -120 -198 -25 -296 -45 -626 -130 -338 -86 -789 -204 -835 -218 -53 -17 -252 -41 -335 -41 -82 0 -125 12 -125 34 0 8 32 48 71 88 76 79 139 153 124 147 -6 -2 -53 -30 -106 -62 -86 -52 -103 -58 -180 -68 -156 -19 -217 -30 -234 -43 -16 -11 -42 -76 -91 -224 -31 -93 -32 -184 -4 -227 11 -16 20 -44 20 -61 0 -58 65 -215 151 -366 69 -120 74 -123 211 -132 118 -7 209 -22 318 -51 82 -22 158 -16 341 24 74 17 186 35 249 41 187 18 289 39 370 75 106 47 166 63 331 85 101 13 180 30 264 58 66 22 208 59 315 81 107 23 254 63 325 88 175 61 422 124 705 179 129 25 258 52 285 59 28 8 140 28 250 44 110 17 232 40 270 51 39 12 106 26 150 31 370 42 960 67 1165 49 121 -11 145 -10 230 6 105 21 198 22 540 10 170 -6 226 -11 270 -26 70 -24 142 -36 300 -50 134 -12 264 -30 400 -56 54 -11 143 -17 245 -18 136 -1 167 2 208 18 61 24 176 18 327 -19 58 -14 155 -37 215 -52 151 -36 336 -39 408 -6 36 17 51 31 63 60 32 76 -20 148 -188 257 -72 46 -88 62 -115 112 -39 73 -95 128 -243 239 -191 142 -396 236 -724 331 -200 58 -422 106 -571 124 -146 18 -741 23 -1010 10 -132 -7 -322 -15 -423 -17 -167 -4 -183 -3 -189 13 -12 32 14 804 29 854 12 42 18 47 79 77 139 67 417 149 634 188 50 8 176 20 280 25 140 7 209 15 260 30 87 25 206 45 355 60 148 15 293 46 350 75 51 26 86 61 125 125 15 25 43 62 61 83 30 33 34 43 34 95 0 64 -18 139 -45 192 -24 48 -72 107 -187 228 -54 56 -110 124 -124 150 -65 113 -94 153 -189 251 -55 57 -145 140 -200 185 -99 81 -228 176 -239 176 -3 0 -6 -16 -6 -35 0 -34 -12 -46 -25 -25 -3 6 -13 10 -22 10 -22 0 -11 -65 22 -126 14 -26 25 -57 25 -70 0 -12 16 -88 36 -169 35 -144 35 -146 17 -177 -10 -17 -51 -51 -94 -78 -41 -26 -108 -74 -148 -108 -41 -34 -89 -67 -107 -74 -19 -7 -34 -17 -34 -24 0 -28 -308 -220 -439 -275 -42 -17 -105 -51 -141 -74 -78 -51 -177 -101 -185 -93 -4 3 -1 30 5 59 36 179 49 269 60 389 14 170 35 319 65 485 14 72 36 231 50 355 15 124 36 279 48 345 20 109 22 153 22 495 0 367 0 376 -22 423 -13 27 -38 70 -57 95 -18 26 -64 108 -101 182 -77 154 -131 235 -201 300 -61 58 -160 125 -220 151 -54 22 -98 55 -206 151 -42 37 -81 68 -87 68 -6 0 -28 -16 -50 -35z m-77 -4375 c23 -8 26 -15 26 -59 l0 -50 -138 6 c-153 7 -184 0 -175 -39 12 -49 64 -152 94 -186 18 -20 48 -70 67 -111 20 -42 46 -89 59 -104 28 -34 30 -63 5 -76 -28 -15 -122 -28 -379 -52 -127 -12 -248 -18 -268 -15 -31 6 -40 14 -57 53 -24 53 -45 178 -48 283 -5 135 -17 118 138 190 209 97 343 137 532 159 107 12 116 12 144 1z" />
      <path d="M2304 4479 c-10 -12 -36 -30 -56 -40 -45 -23 -83 -71 -97 -124 -32 -122 -21 -424 19 -540 11 -33 25 -97 29 -143 7 -70 14 -91 40 -127 44 -62 91 -165 91 -201 0 -19 9 -40 23 -55 13 -13 56 -72 95 -131 100 -150 139 -174 299 -184 75 -5 117 -3 179 11 64 14 86 15 103 5 33 -17 72 -4 115 38 47 45 58 71 61 147 1 33 12 103 24 155 13 52 26 124 31 160 4 36 14 99 23 140 8 41 20 104 27 140 6 36 20 83 30 105 10 22 25 75 34 117 19 95 39 135 106 213 28 33 62 83 75 110 13 28 45 74 70 103 68 81 62 92 -57 92 -45 0 -99 -9 -152 -24 -44 -14 -137 -37 -206 -51 -183 -39 -321 -80 -440 -131 l-105 -44 -110 111 c-115 117 -181 169 -213 169 -10 0 -27 -9 -38 -21z" />
    </g>
    {/* <clipPath id='shape'>
      <path id='blob'>
        <animate attributeName='d' dur='10s' repeatCount='indefinite' values='M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;'></animate>
      </path>
    </clipPath> */}
  </svg>
)

export default Avatar