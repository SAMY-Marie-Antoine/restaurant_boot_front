from PIL import Image
import glob

def crop_center(pil_img, crop_width, crop_height):
    img_width, img_height = pil_img.size
    return pil_img.crop(((img_width - crop_width) // 2,
                         (img_height - crop_height) // 2,
                         (img_width + crop_width) // 2,
                         (img_height + crop_height) // 2))
                         
for imgpath in glob.glob("*_s.jpg") :
	im = Image.open(imgpath)
	im_crop = crop_center(im,200,200)
	im_crop.save("crop"+imgpath, quality=100)


