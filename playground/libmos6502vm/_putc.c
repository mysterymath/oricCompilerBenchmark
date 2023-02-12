/*               _
 **  ___ ___ _ _|_|___ ___
 ** |  _| .'|_'_| |_ -|_ -|
 ** |_| |__,|_,_|_|___|___|
 **         raxiss (c) 2021
 */

/* ================================================================== *
 * MOS6502vm simple stdio library                                     *
 * ================================================================== */

// =====================================================================
#include "conio.h"

// ---------------------------------------------------------------------
void _putc(const char c)
{
  poke(CPORT,c);
}