import React from 'react';
import classes from './style.module.scss';

const IpadDesign = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <div className={classes.leftCnt}>
          <div className={classes.appDrawer}>
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className={classes.someList}>
            <div className={classes.someListWrp}>
              <div className={classes.someListChild}>
                <div className={classes.bar} style={{ width: '40%' }}></div>
                <div
                  className={classes.btn}
                  style={{ background: '#98d05f' }}
                ></div>
              </div>
              <div className={classes.someListChild}>
                <div className={classes.bar} style={{ width: '30%' }}></div>
                <div
                  className={classes.btn}
                  style={{ background: '#fe6160' }}
                ></div>
              </div>
              <div className={classes.someListChild}>
                <div className={classes.bar} style={{ width: '45%' }}></div>
                <div
                  className={classes.btn}
                  style={{ background: '#ffb718' }}
                ></div>
              </div>
              <div className={classes.someListChild}>
                <div className={classes.bar} style={{ width: '40%' }}></div>
                <div
                  className={classes.btn}
                  style={{ background: '#98d05f' }}
                ></div>
              </div>
              <div className={classes.someListChild}>
                <div className={classes.bar} style={{ width: '25%' }}></div>
                <div
                  className={classes.btn}
                  style={{ background: '#fe6160' }}
                ></div>
              </div>
              <div className={classes.someListChild}>
                <div className={classes.bar} style={{ width: '50%' }}></div>
                <div
                  className={classes.btn}
                  style={{ background: '#98d05f' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightCnt}>
          <div className={classes.circleCnt}>
            <div className={classes.topBar}></div>
            <div className={classes.circle}>
              <div className={classes.halfRadius}></div>
            </div>
            <div className={classes.bottomBar}></div>
          </div>
          <div className="p-3">
            <div className={classes.line} />
            <div className={classes.line} style={{ width: '50%' }} />
            <div className={classes.line} style={{ width: '60%' }} />
            <div
              className={classes.line}
              style={{ width: '40%', marginBottom: '20px' }}
            />

            <div className={classes.line} style={{ width: '80%' }} />
            <div className={classes.line} style={{ width: '60%' }} />
            <div className={classes.line} style={{ width: '30%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadDesign;
