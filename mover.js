let mover = {
   /**
    * Получает и отдаёт направление от пользователя.
    */
   getDirection() {
      const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
      while (true) {
         let direction = parseInt(prompt('Введите число (1.2.3.4.6.7.8.9), куда вы хотите переместится'));
         if (isNaN(direction)) {
            return null;
         }
         if (!availableDirections.includes(direction)) {
            alert('Для перемещение необходимо ввести одно из числ 1.2.3.4.6.7.8.9');
            continue;
         }
         return direction;
      }
   },

   getNextPosition(direction) {
      const nextPosition = {
         x: player.x,
         y: player.y
      }
      switch (direction) {
         case 1:
            nextPosition.y++;
            nextPosition.x--;
            break;
         case 2:
            nextPosition.y++;
            break;
         case 3:
            nextPosition.y++;
            nextPosition.x++;
            break;
         case 4:
            nextPosition.x--;
            break;
         case 6:
            nextPosition.x++;
            break;
         case 7:
            nextPosition.y--;
            nextPosition.x--;
            break;
         case 8:
            nextPosition.y--;
            break;
         case 9:
            nextPosition.y--;
            nextPosition.x++;
            break;

      }
      if (nextPosition.x < 0) {
         nextPosition.x = 0;
      }
      if (nextPosition.y < 0) {
         nextPosition.y = 0;
      }
      if (nextPosition.x > 9) {
         nextPosition.x = 9;
      }
      if (nextPosition.y > 9) {
         nextPosition.y = 9;
      }
      return nextPosition;
   }
}