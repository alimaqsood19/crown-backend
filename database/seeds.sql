INSERT INTO collections (title, route_name) VALUES
    ("Hats", "hats"),
    ("Sneakers", "sneakers"),
    ("Jackets", "jackets"),
    ("Womens", "womens"),
    ("Mens", "mens");

INSERT INTO items (name, image_url, price, collection_id) VALUES
    ('Brown Brim', 'https://i.ibb.co/ZYW3VTp/brown-brim.png', 25, 1),
    ('Blue Beanie', 'https://i.ibb.co/ypkgK0X/blue-beanie.png', 18, 1),
    ('Brown Cowboy','https://i.ibb.co/QdJwgmp/brown-cowboy.png', 35, 1),

    ('Adidas NMD', 'https://i.ibb.co/0s3pdnc/adidas-nmd.png', 220, 2),
    ('Adidas Yeezy', 'https://i.ibb.co/dJbG1cT/yeezy.png', 280, 2),
    ('Nike Red High Tops','https://i.ibb.co/QcvzydB/nikes-red.png', 160, 2),

    ('Black Jean Shearling','https://i.ibb.co/XzcwL5s/black-shearling.png', 125, 3),
    ('Blue Jean Jacket','https://i.ibb.co/mJS6vz0/blue-jean-jacket.png', 90, 3),
    ('Grey Jean Jacket','https://i.ibb.co/N71k1ML/grey-jean-jacket.png',90, 3),

    ('Floral T-shirt','https://i.ibb.co/qMQ75QZ/floral-shirt.png',20,4),
    ('Pink T-shirt', 'https://i.ibb.co/RvwnBL8/pink-shirt.png', 25, 4),
    ('Camo Down Vest','https://i.ibb.co/xJS0T3Y/camo-vest.png',325,4),

    ('White Blouse', 'https://i.ibb.co/qBcrsJg/white-vest.png', 20, 5),
    ('Floral Dress','https://i.ibb.co/KV18Ysr/floral-skirt.png',80, 5),
    ('Blue Tanktop', 'https://i.ibb.co/7CQVJNm/blue-tank.png', 25, 5);