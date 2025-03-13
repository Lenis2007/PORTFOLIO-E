import React from 'react'

export const ItemSocial = ({ url = '*', styles, icons = 'Red vacia'}) =>

    <a className={styles} href={url}> {icons} </a>


