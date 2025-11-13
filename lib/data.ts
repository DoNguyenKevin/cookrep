// Dữ liệu danh sách phân loại
export type Category = {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  description: string;
};

export type Food = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookTime: string;
  difficulty: string;
  image?: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "fast-food",
    name: "Đồ ăn nhanh",
    emoji: "🍔",
    gradient: "from-yellow-300 to-orange-500",
    description: "Nhanh, ngon, giá rẻ",
  },
  {
    id: "snacks",
    name: "Đồ ăn vặt",
    emoji: "🍟",
    gradient: "from-pink-300 to-rose-500",
    description: "Giòn, dễ ăn, đa dạng",
  },
  {
    id: "rice",
    name: "Cơm lười",
    emoji: "🍚",
    gradient: "from-emerald-300 to-green-600",
    description: "Đủ chất, no lâu",
  },
  {
    id: "soup",
    name: "Súp nóng",
    emoji: "🥣",
    gradient: "from-cyan-300 to-blue-600",
    description: "Ấm áp, bổ dưỡng",
  },
  {
    id: "dessert",
    name: "Tráng miệng",
    emoji: "🍰",
    gradient: "from-violet-300 to-pink-500",
    description: "Ngọt, thơm, hấp dẫn",
  },
  {
    id: "drinks",
    name: "Đồ uống",
    emoji: "🧋",
    gradient: "from-indigo-300 to-purple-600",
    description: "Mát, tươi, năng lượng",
  },
];

// Dữ liệu món ăn theo phân loại
export const FOODS_BY_CATEGORY: Record<string, Food[]> = {
  "fast-food": [
    {
      id: "burger",
      name: "Bánh mì kẹp thịt (Burger)",
      emoji: "🍔",
      description: "Bánh mì mềm kẹp thịt bò nướng, rau xà lách, cà chua và sốt",
      ingredients: [
        "2 miếng bánh mì burger",
        "150g thịt bò xay",
        "1 lá xà lách",
        "2 lát cà chua",
        "2 lát phô mai",
        "2 muỗng canh sốt cà chua",
        "1 muỗng canh sốt Mayonnaise",
        "Muối và tiêu",
      ],
      instructions: [
        "Nặn thịt bò thành 2 chiếc bánh tròn dầy 2cm",
        "Nướng bánh thịt trên chảy nóng trong 3-4 phút mỗi mặt",
        "Để thêm muối và tiêu vào thịt khi nướng",
        "Nướng bánh mì nhẹ cho đến khi vàng",
        "Phết sốt Mayonnaise vào bánh mì",
        "Xếp thịt nướng, phô mai, xà lách, cà chua vào",
        "Phết thêm sốt cà chua lên trên",
        "Đậy bánh mì trên và cắt đôi",
        "Phục vụ nóng với khoai tây chiên",
      ],
      cookTime: "15 phút",
      difficulty: "Dễ",
    },
    {
      id: "fried-chicken",
      name: "Gà rán giòn",
      emoji: "🍗",
      description: "Gà nướng lót lớp vỏ giòn rụm, có vị gia vị đặc trưng",
      ingredients: [
        "1 con gà khoảng 1kg, cắt miếng",
        "200ml sữa chua",
        "2 muỗng canh bột gạo",
        "1 muỗng canh bột mì",
        "2 muỗng cà phê muối",
        "1 muỗng cà phê tiêu đen",
        "2 muỗng cà phê paprika",
        "Dầu ăn để chiên",
      ],
      instructions: [
        "Ướp gà với sữa chua, muối, tiêu trong 30 phút",
        "Trộn bột gạo, bột mì, muối, tiêu, paprika",
        "Lăn gà trong hỗn hợp bột",
        "Đun dầu đến 180°C",
        "Chiên gà từng miếng cho đến khi vàng đều",
        "Để thêm gà chín hoàn toàn bằng cách nướng ở 160°C 10 phút",
        "Để nguội trên khăn giấy",
        "Phục vụ nóng với sốt hoặc tinh bột khoai tây",
      ],
      cookTime: "45 phút",
      difficulty: "Trung bình",
    },
    {
      id: "pizza",
      name: "Pizza",
      emoji: "🍕",
      description: "Bánh pizza với phô mai tan chảy và topping đa dạng",
      ingredients: [
        "500g bột mì",
        "300ml nước ấm",
        "7g men nổi",
        "10g muối",
        "30ml dầu ô liu",
        "200ml sốt cà chua",
        "300g phô mai Mozzarella",
        "Topping: xúc xích, nấm, hành tây, ớt chuông",
      ],
      instructions: [
        "Trộn bột mì, nước, men, muối, dầu ô liu",
        "Nhào bột đến khi mịn và mềm",
        "Để bột lên men trong 1 giờ",
        "Chia bột thành 2 phần",
        "Trải bột mỏng trên khay nướng được phết dầu",
        "Phét sốt cà chua và topping lên bánh",
        "Rắc phô mai lên trên",
        "Nướng ở 220°C trong 15-20 phút cho đến khi vàng",
        "Rắc rau thơm tươi trước khi phục vụ",
      ],
      cookTime: "90 phút (kể cả lên men)",
      difficulty: "Trung bình",
    },
    {
        id: "hot-dog",
        name: "Xúc xích kẹp bánh mì (Hot Dog)",
        emoji: "🌭",
        description: "Bánh mì mềm kẹp xúc xích nướng, sốt và rau củ",
        ingredients: [
            "2 chiếc bánh mì hot dog",
            "2 cây xúc xích",
            "1 quả dưa chuột muối",
            "1 quả cà chua",
            "2 muỗng canh sốt cà chua",
            "1 muỗng canh sốt mù tạt",
            "1 muỗng canh sốt Mayonnaise",
            "Muối và tiêu"
        ],
        instructions: [
            "Nướng xúc xích trên lửa vừa cho đến khi chín và có vết nướng",
            "Nướng bánh mì cho đến khi vàng giòn",
            "Phết sốt lên bánh mì, sau đó cho xúc xích vào",
            "Thêm dưa chuột, cà chua và các loại sốt khác lên trên",
            "Đậy bánh mì lại và thưởng thức nóng",
        ],
        cookTime: "10 phút",
        difficulty: "Rất dễ",
    },
    {
  id: "french-fries",
  name: "Khoai tây chiên giòn",
  emoji: "🍟",
  description: "Khoai tây chiên vàng giòn, món phụ quốc dân đi kèm mọi loại fast food",
  ingredients: [
    "3 củ khoai tây",
    "500ml dầu ăn",
    "1 muỗng cà phê muối",
    "Nước lạnh + vài viên đá"
  ],
  instructions: [
    "Gọt vỏ và cắt khoai tây thành dạng que",
    "Ngâm khoai trong nước lạnh có đá 10–15 phút",
    "Vớt ra lau khô hoàn toàn",
    "Chiên khoai ở 150°C trong 5 phút cho đến khi mềm",
    "Vớt ra để nguội 10 phút",
    "Chiên lần hai ở 190°C đến khi vàng giòn",
    "Rắc muối và lắc đều",
  ],
  cookTime: "20 phút",
  difficulty: "Dễ"
},
{
  id: "chicken-nuggets",
  name: "Gà Nuggets",
  emoji: "🍘",
  description: "Miếng gà nhỏ bọc bột chiên giòn, chấm tương siêu hợp",
  ingredients: [
    "300g ức gà xay",
    "1 quả trứng",
    "50g bột chiên xù",
    "50g bột mì",
    "1 muỗng cà phê muối",
    "1 muỗng cà phê tiêu",
    "Dầu ăn để chiên"
  ],
  instructions: [
    "Trộn gà xay với muối và tiêu",
    "Nặn thành miếng nhỏ hình vuông hoặc tròn",
    "Lăn qua bột mì, nhúng trứng, rồi lăn bột chiên xù",
    "Đun dầu nóng 180°C",
    "Chiên đến khi vàng đều",
    "Vớt ra và để ráo dầu",
  ],
  cookTime: "20 phút",
  difficulty: "Dễ"
},
{
  id: "beef-taco",
  name: "Taco bò",
  emoji: "🌮",
  description: "Vỏ bánh giòn kẹp nhân bò kiểu Mexico, ăn vui miệng",
  ingredients: [
    "4 vỏ taco giòn",
    "200g thịt bò xay",
    "1 muỗng canh dầu ăn",
    "1 muỗng cà phê muối",
    "1 muỗng cà phê paprika",
    "1/2 củ hành tây băm",
    "Xà lách cắt nhỏ",
    "Phô mai bào",
    "Sốt salsa hoặc tương cà"
  ],
  instructions: [
    "Xào hành tây đến khi thơm",
    "Thêm bò xay vào xào chín",
    "Nêm muối, tiêu, paprika",
    "Nhét thịt bò vào vỏ bánh taco",
    "Thêm xà lách, phô mai và sốt",
    "Ăn liền khi vỏ còn giòn"
  ],
  cookTime: "15 phút",
  difficulty: "Dễ"
},
{
  id: "chicken-burrito",
  name: "Burrito gà",
  emoji: "🌯",
  description: "Bánh cuộn kiểu Mexico với gà, rau và cơm, ăn rất chắc bụng",
  ingredients: [
    "2 bánh tortilla lớn",
    "200g ức gà thái nhỏ",
    "1 chén cơm",
    "Xà lách cắt nhỏ",
    "1/2 quả bơ cắt lát",
    "2 muỗng sốt mayonnaise hoặc yogurt",
    "Paprika, muối, tiêu"
  ],
  instructions: [
    "Xào gà với muối, tiêu, paprika",
    "Trải tortilla ra bàn",
    "Cho cơm, gà, xà lách, bơ và sốt vào",
    "Cuộn chặt tay",
    "Áp chảo nhẹ cho vỏ bánh ấm và thơm",
  ],
  cookTime: "10 phút",
  difficulty: "Rất dễ"
},




  ],
  snacks: [
    {
      id: "fried-potato",
      name: "Khoai tây chiên",
      emoji: "🍟",
      description: "Khoai tây cắt sợi, chiên vàng giòn, ăn kèm sốt",
      ingredients: [
        "500g khoai tây",
        "Dầu ăn để chiên",
        "2 muỗng cà phê muối",
        "1 muỗng cà phê ớt bột (tùy chọn)",
      ],
      instructions: [
        "Rửa khoai tây sạch",
        "Cắt khoai tây thành sợi dài, đều nhau",
        "Ngâm khoai tây trong nước lạnh 30 phút",
        "Rửa lại và để ráo nước",
        "Đun dầu đến 180°C",
        "Chiên khoai tây từng mẻ cho đến khi vàng",
        "Để trên khăn giấy để thoát dầu",
        "Rắc muối và ớt bột",
        "Phục vụ nóng với sốt cà chua hoặc Mayonnaise",
      ],
      cookTime: "20 phút",
      difficulty: "Dễ",
    },
    {
      id: "spring-roll",
      name: "Cuốn hè (Spring roll)",
      emoji: "🥙",
      description: "Bánh tráng cuốn với nhân rau, thịt, tôm, chiên vàng",
      ingredients: [
        "15 tờ bánh tráng",
        "200g tôm sạch",
        "150g thịt lợn nạc",
        "1 cà rốt",
        "100g nấm",
        "50g miến",
        "Xà lách tươi",
        "Dầu ăn",
        "Sốt chấm",
      ],
      instructions: [
        "Luộc tôm và thịt lợn cho tới khi chín",
        "Cắt tôm, thịt, cà rốt, nấm thành sợi mỏng",
        "Ngâm miến trong nước ấm cho đến khi mềm",
        "Ngâm bánh tráng trong nước ấm 2-3 giây",
        "Đặt bánh tráng trên mặt phẳng",
        "Đặt xà lách, rồi tôm, thịt, cà rốt, nấm, miến",
        "Cuốn chặt từ dưới lên, gấp hai bên vào",
        "Chiên golden brown cho đến khi giòn",
        "Phục vụ nóng với sốt chấm",
      ],
      cookTime: "30 phút",
      difficulty: "Trung bình",
    },
  ],
  rice: [
    {
      id: "fried-rice",
      name: "Cơm chiên dương châu",
      emoji: "🍚",
      description: "Cơm chiên với trứng, rau, thịt, hành lá thơm ngon",
      ingredients: [
        "3 tasses cơm nguội",
        "3 quả trứng",
        "100g thịt lợn xay hoặc tôm",
        "1 cà rốt",
        "100g đậu Hà Lan",
        "3 nhánh hành lá",
        "3 muỗng canh dầu ăn",
        "2 muỗng canh nước tương",
        "1 muỗng cà phê dầu mè",
      ],
      instructions: [
        "Đánh trứng, thêm một chút muối",
        "Rão dầu vào chảo nóng",
        "Đổ trứng vào, xáo cho đến khi chín, sau đó lấy ra",
        "Thêm dầu ăn, nấu thịt hoặc tôm cho đến khi chín",
        "Thêm cà rốt, đậu Hà Lan, xáo đều",
        "Đặt cơm vào, xáo để tách hạt",
        "Thêm nước tương, dầu mè, trứng vừa làm",
        "Xáo nhanh để hỗn hợp đều",
        "Rắc hành lá tươi lên trên",
        "Phục vụ nóng",
      ],
      cookTime: "15 phút",
      difficulty: "Dễ",
    },
    {
      id: "rice-bowl",
      name: "Cơm bát cá kho",
      emoji: "🍲",
      description: "Cơm tấp với cá kho tộ thơm lừng, mặn mặn",
      ingredients: [
        "500g cá",
        "3 tasses cơm sôi mới",
        "3 muỗng canh nước tương",
        "1 muỗng canh nước mắm",
        "2 muỗng canh đường",
        "2 tép tỏi",
        "1 miếng gừng",
        "Dầu ăn",
        "Rau thơm",
      ],
      instructions: [
        "Rửa cá sạch, cắt thành miếng vừa ăn",
        "Thái tỏi, gừng thành sợi mỏng",
        "Đáy chảo rào dầu, nấu tỏi gừng thơm",
        "Thêm cá vào, nấu qua 2 phía",
        "Thêm nước tương, nước mắm, đường",
        "Thêm ít nước, đun lửa nhỏ cho đến khi cá chín",
        "Nước sốt sẽ đặc lại dần dần",
        "Nếm lại vị và điều chỉnh",
        "Đổ ca kho lên cơm nóng",
        "Rắc rau thơm, ớt",
      ],
      cookTime: "20 phút",
      difficulty: "Dễ",
    },
  ],
  soup: [
    {
      id: "chicken-soup",
      name: "Canh gà gừng",
      emoji: "🍜",
      description: "Canh gà ấm áp với gừng, rau, thích hợp cho ngày mưa",
      ingredients: [
        "500g gà",
        "5 miếng gừng dày",
        "2 lít nước dùng hoặc nước",
        "5 nấm hương",
        "100g khoai tây",
        "1 thỏi hành",
        "2 muỗng canh nước mắm",
        "Muối, tiêu",
        "Rau thơm",
      ],
      instructions: [
        "Rửa gà sạch, cắt miếng",
        "Thái gừng thành miếng dầy",
        "Đun 2 lít nước, thêm gà và gừng",
        "Nấu cho đến khi nước sôi",
        "Vớt bọt mặt",
        "Thêm nấm hương, khoai tây, hành",
        "Nấu trong 20-30 phút",
        "Thêm nước mắm, muối, tiêu",
        "Nếm lại vị",
        "Rắc rau thơm, ớt lên trên",
      ],
      cookTime: "40 phút",
      difficulty: "Dễ",
    },
    {
      id: "seafood-soup",
      name: "Canh hải sản",
      emoji: "🦐",
      description: "Canh tôm, mực, cua với cà chua chua cà phê",
      ingredients: [
        "200g tôm sạch",
        "150g mực",
        "100g cua",
        "2 quả cà chua to",
        "2 lít nước dùng",
        "1 thỏi hành",
        "3 tép tỏi",
        "2 muỗng canh nước mắm",
        "Nước cốt chanh",
        "Hành, ớt",
      ],
      instructions: [
        "Sơ chế hải sản sạch",
        "Cắt cà chua thành múi",
        "Thái tỏi, hành nhỏ",
        "Đun nước dùng, thêm hành, tỏi",
        "Đặt hải sản vào, nấu đến khi chín",
        "Thêm cà chua, nước mắm",
        "Nấu trong 10-15 phút",
        "Thêm nước cốt chanh vào",
        "Nếm lại vị",
        "Rắc rau thơm, ớt lên trên",
      ],
      cookTime: "25 phút",
      difficulty: "Trung bình",
    },
  ],
  dessert: [
    {
      id: "mango-smoothie",
      name: "Sinh tố xoài",
      emoji: "🥤",
      description: "Sinh tố xoài mát lạnh, ngọt ngảy, tươi mát",
      ingredients: [
        "2 quả xoài chín",
        "200ml sữa tươi",
        "100ml nước đá",
        "2 muỗng canh đường (tùy chọn)",
        "Hạt bạch đậu (tùy chọn)",
      ],
      instructions: [
        "Lựa chọn xoài chín, rửa sạch",
        "Bôi xoài lên trên để lấy xà phòng",
        "Cắt xoài thành miếng, loại bỏ nhân",
        "Cho xoài, sữa, nước đá vào máy xay",
        "Xay đến khi hỗn hợp mịn, đều",
        "Nếm vị, thêm đường nếu cần",
        "Đổ vào ly đã chuẩn bị",
        "Rắc hạt bạch đậu, thêm ống hút",
        "Phục vụ ngay lập tức",
      ],
      cookTime: "5 phút",
      difficulty: "Rất dễ",
    },
    {
      id: "panna-cotta",
      name: "Panna cotta",
      emoji: "🍮",
      description: "Bánh kem lạnh trơn mịn, tan trên lưỡi",
      ingredients: [
        "500ml kem đặc sánh",
        "100ml sữa",
        "80g đường",
        "5g gelatin hoặc agar",
        "1 muỗng cà phê chiết xuất vanilla",
        "Sốt quả berry",
      ],
      instructions: [
        "Ngâm gelatin trong nước lạnh 5 phút",
        "Đun kem, sữa, đường cho đến khi sắp sôi",
        "Thêm gelatin, khuấy đều",
        "Thêm vanilla chiết xuất",
        "Lọc hỗn hợp qua sàng mịn",
        "Để nguội đến nhiệt độ phòng",
        "Đổ vào ly hoặc khuôn",
        "Để trong tủ lạnh 4 giờ hoặc qua đêm",
        "Phục vụ với sốt quả berry",
      ],
      cookTime: "15 phút (+ 4 giờ đông lạnh)",
      difficulty: "Trung bình",
    },
  ],
  drinks: [
    {
      id: "coffee",
      name: "Cà phê đen đá",
      emoji: "☕",
      description: "Cà phê đen nguyên chất, đắng nhẹ, thơm lừng",
      ingredients: [
        "20g bột cà phê",
        "100ml nước nóng",
        "Đá viên",
        "Tùy chọn: sữa đặc, đường",
      ],
      instructions: [
        "Chuẩn bị phin cà phê",
        "Đặt bộ lọc trong phin",
        "Thêm bột cà phê vào phin",
        "Ấn nhẹ bằng nắp",
        "Đổ nước nóng 85°C vào",
        "Để phin nhỏ từ từ (3-5 phút)",
        "Chuẩn bị ly đá",
        "Đổ cà phê từ phin vào ly",
        "Khuấy đều, thêm sữa hay đường nếu thích",
        "Thêm đá vào và phục vụ",
      ],
      cookTime: "10 phút",
      difficulty: "Rất dễ",
    },
    {
      id: "bubble-tea",
      name: "Trà sữa trân châu",
      emoji: "🧋",
      description: "Trà sữa mềm mất kèm trân châu Q dẻo dai",
      ingredients: [
        "30g trân châu",
        "500ml trà đen",
        "100ml sữa tươi",
        "30g đường",
        "Nước ấm",
        "Đá viên",
      ],
      instructions: [
        "Nấu trân châu theo hướng dẫn bao bì",
        "Để trân châu trong nước đường",
        "Pha trà đen với nước ấm",
        "Để trà nguội đến nhiệt độ phòng",
        "Thêm đá vào ly",
        "Rót 3/4 ly trà",
        "Thêm sữa tươi vào (khuấy hay không)",
        "Thêm trân châu vào",
        "Thêm ống hút to",
        "Phục vụ ngay",
      ],
      cookTime: "15 phút",
      difficulty: "Dễ",
    },
  ],
};

// Hàm trợ giúp
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}

export function getFoodsInCategory(categoryId: string): Food[] {
  return FOODS_BY_CATEGORY[categoryId] || [];
}

export function getFoodById(categoryId: string, foodId: string): Food | undefined {
  return getFoodsInCategory(categoryId).find((food) => food.id === foodId);
}
