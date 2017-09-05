function conditionalTree(example) {
  if (example['8'] <= 1) { 
   if (example['10'] <= 0) { 
     if (example['1'] <= 98) { 
       if (example['1'] <= 56) { 
         if (example['5'] <= 11) { 
           if (example['6'] <= 2) { 
             return '1';
            } else {
             if (example['1'] <= 49) { 
               return '1';
              }
              return '2';
            }
          } else {
           if (example['12'] <= 1) { 
             return '2';
            }
            return '1';
          }
        } else {
         if (example['14'] <= 400) { 
           if (example['7'] <= 5) { 
             return '2';
            } else {
             if (example['7'] <= 6.5) { 
               return '1';
              }
              return '2';
            }
          }
          return '1';
        }
      } else {
       if (example['13'] <= 130) { 
         if (example['1'] <= 301) { 
           if (example['7'] <= 1.165) { 
             if (example['12'] <= 1) { 
               if (example['2'] <= 9.96) { 
                 if (example['7'] <= 1) { 
                   return '1';
                  }
                  return '2';
                }
                return '2';
              }
              return '2';
            }
            return '1';
          } else {
           if (example['1'] <= 312) { 
             return '2';
            }
            return '1';
          }
        }
        return '2';
      }
    } else {
     if (example['14'] <= 130) { 
       if (example['1'] <= 72) { 
         return '1';
        } else {
         if (example['1'] <= 101) { 
           if (example['13'] <= 56) { 
             if (example['4'] <= 1) { 
               return '2';
              } else {
               if (example['7'] <= 2.5) { 
                 return '2';
                }
                return '1';
              }
            }
            return '1';
          } else {
           if (example['13'] <= 4) { 
             return '2';
            } else {
             if (example['2'] <= 1.04) { 
               if (example['7'] <= 0.415) { 
                 return '1';
                } else {
                 if (example['7'] <= 0.585) { 
                   return '2';
                  }
                  return '1';
                }
              }
              return '1';
            }
          }
        }
      } else {
       if (example['5'] <= 2) { 
         if (example['2'] <= 0.46) { 
           return '2';
          } else {
           if (example['7'] <= 1.75) { 
             if (example['7'] <= 1.5) { 
               if (example['13'] <= 27) { 
                 return '1';
                } else {
                 if (example['7'] <= 1) { 
                   return '2';
                  }
                  return '1';
                }
              }
              return '2';
            }
            return '1';
          }
        }
        return '1';
      }
    }
  } else {
   if (example['3'] <= 2) { 
     if (example['2'] <= 0.165) { 
       if (example['1'] <= 309) { 
         if (example['6'] <= 4) { 
           if (example['1'] <= 33) { 
             return '1';
            }
            return '2';
          }
          return '1';
        }
        return '1';
      } else {
       if (example['1'] <= 57) { 
         if (example['1'] <= 46) { 
           if (example['13'] <= 136) { 
             if (example['2'] <= 0.83) { 
               if (example['13'] <= 11) { 
                 return '1';
                }
                return '2';
              }
              return '2';
            }
            return '1';
          } else {
           if (example['7'] <= 0.125) { 
             return '2';
            }
            return '1';
          }
        } else {
         if (example['7'] <= 1.25) { 
           return '2';
          } else {
           if (example['7'] <= 1.5) { 
             if (example['5'] <= 1) { 
               return '1';
              } else {
               if (example['5'] <= 7) { 
                 return '2';
                } else {
                 if (example['1'] <= 91) { 
                   return '1';
                  }
                  return '2';
                }
              }
            }
            return '2';
          }
        }
      }
    } else {
     if (example['1'] <= 222) { 
       return '1';
      } else {
       if (example['0'] <= 1) { 
         return '2';
        }
        return '1';
      }
    }
  }
}

module.exports = conditionalTree;