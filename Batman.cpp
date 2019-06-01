#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

int main()
{
    int W; // width of the building.
    int H; // height of the building.
    cin >> W >> H;
    cin.ignore();
    int N; // maximum number of turns before game over.
    cin >> N;
    cin.ignore();
    int X0;
    int Y0;
    cin >> X0 >> Y0;
    cin.ignore();

    // game loop
    while (1)
    {
        string bombDir; // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        cin >> bombDir;
        cin.ignore();

        if (bombDir == "U")
        {
            Y0 -= (H - Y0) / 2;
        }

        if (bombDir == "UR")
        {
            Y0 -= (H - Y0) / 2;
            X0 += (W - X0) / 2;
        }
        if (bombDir == "R")
        {
            X0 += (W - X0) / 2;
        }
        if (bombDir == "DR")
        {
            X0 += (W - X0) / 2;
            Y0 += (H - Y0) / 2;
        }
        if (bombDir == "D")
        {
            Y0 += (H - Y0) / 2;
        }
        if (bombDir == "DL")
        {
            Y0 += (H - Y0) / 2;
            X0 -= (W - X0) / 2;
        }
        if (bombDir == "L")
        {
            X0 -= (W - X0) / 2;
        }
        if (bombDir == "UL")
        {
            Y0 -= (H - Y0) / 2;
            X0 -= (W - X0) / 2;
        }

        // the location of the next window Batman should jump to.
        cout << X0 << " " << Y0 << endl;
    }
}