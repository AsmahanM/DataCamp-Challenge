// [X Y BEARING COMMANDS]

// const robotDirections = ['NORTH', 'EAST', 'SOUTH', 'WEST']

class Robot {
execute(string) {
    let stringArr = string.split(" "); //Each 'segment' of the string instruction will be split up and turned into an array.
    this.x = parseInt(stringArr[0]); //The index specifies the order/sequencing of the instructions.
    this.y = parseInt(stringArr[1]);
    this.bearing = stringArr[2].toUpperCase();
    this.commands = stringArr[3].toUpperCase();

    // if (!robotDirections.includes(direction)) {
    //     throw 'Invalid Bearing'
    //   }

        for (const direction of this.commands) {
            switch(direction) {

                case 'R': //If the direction is right we move clockwise...
                if (this.bearing == 'NORTH') {this.bearing == 'EAST'} //turning right when facing north means the robot will now face east
                if (this.bearing == 'EAST') {this.bearing == 'SOUTH'} //turning right when facing east means the robot will now face south
                if (this.bearing == 'SOUTH') {this.bearing == 'WEST'} //turning right when facing south means the robot will now face west
                if (this.bearing == 'WEST') {this.bearing == 'NORTH'} //turning right when facing west means the robot will now face north
                
                break;

                case 'L': //If the direction is left we move anticlockwise...
                if (this.bearing == 'NORTH') {this.bearing == 'WEST'} //turning left when facing north means the robot will now face west
                if (this.bearing == 'EAST') {this.bearing == 'NORTH'} //turning left when facing east means the robot will now face north
                if (this.bearing == 'SOUTH') {this.bearing == 'EAST'} //turning left when facing south means the robot will now face east
                if (this.bearing == 'WEST') {this.bearing == 'SOUTH'} //turning left when facing west means the robot will now face south
                
                break;

                case 'A': //North and South are on the y axis. East and West are on the x axis.
                if (this.bearing == 'NORTH') {this.y++} //move up one position on the y axis
                if (this.bearing == 'EAST') {this.x++} //move up one position on the x axis
                if (this.bearing == 'SOUTH') {this.y--} //move down one position on the y axis
                if (this.bearing == 'WEST') {this.x--} //move left one position on the x axis
                
                // break;
            }
        }
    return `${this.x} ${this.y} ${this.bearing}`;
}
}

module.exports = Robot 

