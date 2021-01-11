import React from 'react'
import interior1 from '../../images/interior1.jpg';
import interior2 from '../../images/interior2.jpg'

export const Interior = () => {
    return (
        <div className="Interior">
            <div className="InteriorClip">
              <h3>Interior</h3>
              <p>The interior of the Tesla Model 3 is now 100 percent leather-free. Recently,<br /> Tesla announced that the Model 3 is now totally free of leather, including the<br /> steering wheel. The company has also vowed that its forthcoming Model Y will<br /> also be fully vegan when it debuts in 2020.</p>
              <div className="interiorImgCon">
                <h4>parallex interior</h4>
                <div className="Interiorimgs">
                <img src={interior1} alt=""/>
                <img src={interior2} alt=""/>
            </div>
            </div>
            </div>
           
        </div>
    )
}
