ip='192.168.1.12'

rsync -az --exclude node_modules --progress . pi@$ip:/home/pi/code/playground